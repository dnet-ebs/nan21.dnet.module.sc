/**
 * DNet eBusiness Suite
 * Copyright: 2010-2013 Nan21 Electronics SRL. All rights reserved.
 * Use is subject to license terms.
 */
Ext.define(Dnet.ns.sc + "PaymentOutAmountProposal_Dc" , {
	extend: "dnet.core.dc.AbstractDc",
	filterModel: Dnet.ns.sc + "PaymentOutAmountProposal_DsFilter",
	paramModel: Dnet.ns.sc + "PaymentOutAmountProposal_DsParam",
	recordModel: Dnet.ns.sc + "PaymentOutAmountProposal_Ds",
			
			/* ================ Business functions ================ */
	
	_registerListeners_: function() {
		
		this.callParent(arguments);
		this.mon(this.store, "load", this.distributePayment, this);
		this.mon(this.store, "changes_rejected", this.updateUnusedAmount, this);
	},
	
	distributePayment: function() {
		
		var receivedAmount = this.params.get("receivedAmount");
		var unallocated = receivedAmount;
		 
		this.store.each(function(record) {			
			var r=record;
			r.beginEdit();
			var o = r.get("amountDue");
			if (unallocated <= o) {
				r.set("currentPayment",unallocated);
				unallocated = 0;
			} else {
				r.set("currentPayment",o);				 
				unallocated = unallocated - o;
			}
			r.set("remainingAmount",o-r.get("currentPayment"));
			r.endEdit();
		});
		this.setParamValue("unAllocatedAmount",unallocated);
	},
	
	updateUnusedAmount: function() {
		
		var u = 0;
		this.store.each(function(record) {
			u+=record.get("currentPayment");
		});
		this.setParamValue("unAllocatedAmount",this.getParamValue("receivedAmount") - u);
	}

});

/* ================= FILTER FORM: Filter ================= */			

Ext.define(Dnet.ns.sc + "PaymentOutAmountProposal_Dc$Filter" , {
	extend: "dnet.core.dc.view.AbstractDcvFilterForm",
	alias: "widget.sc_PaymentOutAmountProposal_Dc$Filter",

	/**
	 * Components definition
	 */	
	_defineElements_: function() {
		this._getBuilder_()
		
		/* =========== controls =========== */
		.addTextField({ name:"businessPartner", paramIndex:"businessPartner", noEdit:true , caseRestriction:"uppercase"})
		.addNumberField({name:"receivedAmount", paramIndex:"receivedAmount", noEdit:true , fieldCls:"important-field", decimals:6})
		.addNumberField({name:"unAllocatedAmount", paramIndex:"unAllocatedAmount", noEdit:true , fieldCls:"important-field", decimals:6})
		.addTextField({ name:"currency", paramIndex:"paymentCurrency", noEdit:true , fieldCls:"important-field", caseRestriction:"uppercase"})
		.addDateField({name:"dueDate_From", dataIndex:"dueDate_From", emptyText:"From" })
		.addDateField({name:"dueDate_To", dataIndex:"dueDate_To", emptyText:"To" })
		.addFieldContainer({name: "dueDate"})
			.addChildrenTo("dueDate",["dueDate_From", "dueDate_To"])
		.addNumberField({name:"amountInitial_From", dataIndex:"amountInitial_From", emptyText:"From" })
		.addNumberField({name:"amountInitial_To", dataIndex:"amountInitial_To", emptyText:"To" })
		.addFieldContainer({name: "amountInitial"})
			.addChildrenTo("amountInitial",["amountInitial_From", "amountInitial_To"])
		.addNumberField({name:"amountDue_From", dataIndex:"amountDue_From", emptyText:"From" })
		.addNumberField({name:"amountDue_To", dataIndex:"amountDue_To", emptyText:"To" })
		.addFieldContainer({name: "amountDue"})
			.addChildrenTo("amountDue",["amountDue_From", "amountDue_To"])
		
		/* =========== containers =========== */
		.addPanel({ name:"main", autoScroll:true, layout: {type:"hbox", align:'top', pack:'start', defaultMargins: {right:5, left:5}},
		autoScroll:true, padding:"0 30 5 0"})
		.addPanel({ name:"col1", width:250, layout:"form"})
		.addPanel({ name:"col2", width:300, layout:"form"});
	},

	/**
	 * Combine the components
	 */				
	_linkElements_: function() {
		this._getBuilder_()
		.addChildrenTo("main", ["col1", "col2"])
		.addChildrenTo("col1", ["businessPartner", "currency", "receivedAmount", "unAllocatedAmount"])
		.addChildrenTo("col2", ["dueDate", "amountInitial", "amountDue"]);
	}
});

/* ================= EDIT-GRID: EditList ================= */

Ext.define(Dnet.ns.sc + "PaymentOutAmountProposal_Dc$EditList" , {
	extend: "dnet.core.dc.view.AbstractDcvEditableGrid",
	alias: "widget.sc_PaymentOutAmountProposal_Dc$EditList",
	_noImport_: true,
	_noExport_: true,
	_noPrint_: true,
	_noSort_: true,

	/**
	 * Columns definition
	 */
	_defineColumns_: function() {
		this._getBuilder_()	
		.addDateColumn({name:"dueDate", dataIndex:"dueDate", _mask_: Masks.DATE, noEdit: true })
		.addNumberColumn({name:"amountInitial", dataIndex:"amountInitial", align:"right", decimals:6, noEdit: true })
		.addNumberColumn({name:"amountPayed", dataIndex:"amountPayed", align:"right", decimals:6, noEdit: true })
		.addNumberColumn({name:"amountDue", dataIndex:"amountDue", align:"right", decimals:6, noEdit: true })
		.addNumberColumn({name:"currentPayment", dataIndex:"currentPayment", align:"right", decimals:6 })
		.addNumberColumn({name:"remainingAmount", dataIndex:"remainingAmount", align:"right", decimals:6, noEdit: true })
		.addDefaults();
	},
	/* ==================== Business functions ==================== */
	
	_afterEdit_: function(editor,e,eOpts) {
		
		var r = e.record;
		var ov = e.originalValue;
		var nv = e.value;
		r.set("remainingAmount", r.get("amountDue") - r.get("currentPayment"));
		this._controller_.updateUnusedAmount();
	}
});
