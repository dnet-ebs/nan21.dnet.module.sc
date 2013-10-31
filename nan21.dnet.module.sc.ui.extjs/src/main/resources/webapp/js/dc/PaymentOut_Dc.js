/**
 * DNet eBusiness Suite
 * Copyright: 2010-2013 Nan21 Electronics SRL. All rights reserved.
 * Use is subject to license terms.
 */
Ext.define(Dnet.ns.sc + "PaymentOut_Dc" , {
	extend: "dnet.core.dc.AbstractDc",
	filterModel: Dnet.ns.sc + "PaymentOut_DsFilter",
	recordModel: Dnet.ns.sc + "PaymentOut_Ds"
});

/* ================= FILTER FORM: Filter ================= */			

Ext.define(Dnet.ns.sc + "PaymentOut_Dc$Filter" , {
	extend: "dnet.core.dc.view.AbstractDcvFilterForm",
	alias: "widget.sc_PaymentOut_Dc$Filter",

	/**
	 * Components definition
	 */	
	_defineElements_: function() {
		this._getBuilder_()
		
		/* =========== controls =========== */
		.addLov({name:"docType", dataIndex:"docType", xtype:"md_DocTypes_Lov", caseRestriction:"uppercase",
			retFieldMapping: [{lovField:"id", dsField: "docTypeId"} ],
			filterFieldMapping: [{lovField:"category", value: "payment-out"} ]})
		.addLov({name:"company", dataIndex:"company", allowBlank:false, xtype:"md_OrgsLegalEntity_Lov", caseRestriction:"uppercase",
			retFieldMapping: [{lovField:"id", dsField: "companyId"} ]})
		.addLov({name:"bpartner", dataIndex:"bpartner", xtype:"md_CustomerAccounts_Lov", caseRestriction:"uppercase",
			retFieldMapping: [{lovField:"id", dsField: "bpAccountId"} ],
			filterFieldMapping: [{lovField:"companyId", dsField: "companyId"} ]})
		.addLov({name:"currency", dataIndex:"currency", xtype:"bd_Currencies_Lov", caseRestriction:"uppercase",
			retFieldMapping: [{lovField:"id", dsField: "currencyId"} ]})
		.addBooleanField({ name:"confirmed", dataIndex:"confirmed"})
		.addBooleanField({ name:"posted", dataIndex:"posted"})
		.addDateField({name:"docDate_From", dataIndex:"docDate_From", emptyText:"From" })
		.addDateField({name:"docDate_To", dataIndex:"docDate_To", emptyText:"To" })
		.addFieldContainer({name: "docDate", fieldLabel:"Doc Date"})
			.addChildrenTo("docDate",["docDate_From", "docDate_To"])
		
		/* =========== containers =========== */
		.addPanel({ name:"main", autoScroll:true, layout: {type:"hbox", align:'top', pack:'start', defaultMargins: {right:5, left:5}},
		autoScroll:true, padding:"0 30 5 0"})
		.addPanel({ name:"col1", width:250, layout:"form"})
		.addPanel({ name:"col3", width:220, layout:"form"})
		.addPanel({ name:"col4", width:300, layout:"form"})
		.addPanel({ name:"col5", width:170, layout:"form"});
	},

	/**
	 * Combine the components
	 */				
	_linkElements_: function() {
		this._getBuilder_()
		.addChildrenTo("main", ["col1", "col3", "col4", "col5"])
		.addChildrenTo("col1", ["company", "bpartner", "docType"])
		.addChildrenTo("col3", ["currency"])
		.addChildrenTo("col4", ["docDate"])
		.addChildrenTo("col5", ["confirmed", "posted"]);
	}
});

/* ================= GRID: List ================= */

Ext.define(Dnet.ns.sc + "PaymentOut_Dc$List" , {
	extend: "dnet.core.dc.view.AbstractDcvGrid",
	alias: "widget.sc_PaymentOut_Dc$List",

	/**
	 * Columns definition
	 */
	_defineColumns_: function() {
		this._getBuilder_()
		.addTextColumn({ name:"company", dataIndex:"company", width:120})
		.addTextColumn({ name:"companyId", dataIndex:"companyId", hidden:true, width:100})
		.addTextColumn({ name:"bpartner", dataIndex:"bpartner", width:120})
		.addTextColumn({ name:"bpartnerName", dataIndex:"bpartnerName", hidden:true, width:200})
		.addTextColumn({ name:"bpartnerId", dataIndex:"bpartnerId", hidden:true, width:100})
		.addTextColumn({ name:"docType", dataIndex:"docType", width:120})
		.addTextColumn({ name:"docNo", dataIndex:"docNo", width:80})
		.addDateColumn({ name:"docDate", dataIndex:"docDate", _mask_: Masks.DATE})
		.addNumberColumn({ name:"amount", dataIndex:"amount", decimals:6})
		.addTextColumn({ name:"currency", dataIndex:"currency", width:60})
		.addTextColumn({ name:"currencyId", dataIndex:"currencyId", hidden:true, width:100})
		.addNumberColumn({ name:"amountLoc", dataIndex:"amountLoc", hidden:true, decimals:6})
		.addNumberColumn({ name:"amountRef", dataIndex:"amountRef", hidden:true, decimals:6})
		.addBooleanColumn({ name:"confirmed", dataIndex:"confirmed"})
		.addBooleanColumn({ name:"posted", dataIndex:"posted"})
		.addDefaults();
	}
});

/* ================= EDIT FORM: Create ================= */

Ext.define(Dnet.ns.sc + "PaymentOut_Dc$Create" , {
	extend: "dnet.core.dc.view.AbstractDcvEditForm",
	alias: "widget.sc_PaymentOut_Dc$Create",

	/**
	 * Components definition
	 */
	_defineElements_: function() {
		this._getBuilder_()
		
		/* =========== controls =========== */
		.addLov({name:"docType", dataIndex:"docType", allowBlank:false, xtype:"md_DocTypes_Lov", caseRestriction:"uppercase",
			retFieldMapping: [{lovField:"id", dsField: "docTypeId"} ],
			filterFieldMapping: [{lovField:"category", value: "payment-out"} ]})
		.addLov({name:"company", dataIndex:"company", noUpdate:true, allowBlank:false, xtype:"md_OrgsLegalEntity_Lov", caseRestriction:"uppercase",
			retFieldMapping: [{lovField:"id", dsField: "companyId"} ]})
		.addLov({name:"bpartner", dataIndex:"bpartner", noUpdate:true, allowBlank:false, xtype:"md_CustomerAccounts_Lov", caseRestriction:"uppercase",
			retFieldMapping: [{lovField:"id", dsField: "bpAccountId"} ,{lovField:"bpartnerId", dsField: "bpartnerId"} ],
			filterFieldMapping: [{lovField:"companyId", dsField: "companyId"}, {lovField:"active", value: "true"} ]})
		.addLov({name:"currency", dataIndex:"currency", allowBlank:false, xtype:"bd_Currencies_Lov", caseRestriction:"uppercase",
			retFieldMapping: [{lovField:"id", dsField: "currencyId"} ],
			filterFieldMapping: [{lovField:"active", value: "true"} ]})
		.addDateField({name:"docDate", dataIndex:"docDate", allowBlank:false})
		
		/* =========== containers =========== */
		.addPanel({ name:"main", autoScroll:true, width:300, layout:"form"});
	},

	/**
	 * Combine the components
	 */			
	_linkElements_: function() {
		this._getBuilder_()
		.addChildrenTo("main", ["company", "docType", "bpartner", "currency", "docDate"]);
	}
});

/* ================= EDIT FORM: Edit ================= */

Ext.define(Dnet.ns.sc + "PaymentOut_Dc$Edit" , {
	extend: "dnet.core.dc.view.AbstractDcvEditForm",
	alias: "widget.sc_PaymentOut_Dc$Edit",

	/**
	 * Components definition
	 */
	_defineElements_: function() {
		this._getBuilder_()
		
		/* =========== controls =========== */
		.addDisplayFieldText({ name:"docType", dataIndex:"docType", caseRestriction:"uppercase"})
		.addDisplayFieldText({ name:"docNo", dataIndex:"docNo"})
		.addDisplayFieldDate({ name:"docDate", dataIndex:"docDate" })
		.addDisplayFieldText({ name:"company", dataIndex:"company", caseRestriction:"uppercase"})
		.addDisplayFieldText({ name:"bpartner", dataIndex:"bpartner", caseRestriction:"uppercase"})
		.addDisplayFieldText({ name:"currency", dataIndex:"currency", fieldCls:"displayfield important-field", caseRestriction:"uppercase"})
		.addDisplayFieldNumber({ name:"amount", dataIndex:"amount", fieldCls:"displayfieldnumber important-field", decimals:6 })
		.addDisplayFieldBoolean({ name:"confirmed", dataIndex:"confirmed" })
		.addDisplayFieldBoolean({ name:"posted", dataIndex:"posted" })
		
		/* =========== containers =========== */
		.addPanel({ name:"main", autoScroll:true, layout: {type:"hbox", align:'top', pack:'start', defaultMargins: {right:5, left:5}},
		autoScroll:true, padding:"0 30 5 0"})
		.addPanel({ name:"col1", width:250, layout:"form"})
		.addPanel({ name:"col2", width:200, layout:"form"})
		.addPanel({ name:"col3", width:250, layout:"form"})
		.addPanel({ name:"col4", width:170, layout:"form"});
	},

	/**
	 * Combine the components
	 */			
	_linkElements_: function() {
		this._getBuilder_()
		.addChildrenTo("main", ["col1", "col2", "col3", "col4"])
		.addChildrenTo("col1", ["docType", "company", "bpartner"])
		.addChildrenTo("col2", ["docDate", "docNo", "currency"])
		.addChildrenTo("col3", ["amount"])
		.addChildrenTo("col4", ["confirmed", "posted"]);
	},
	/* ==================== Business functions ==================== */
	
	_beforeApplyStates_: function(record) {
		if (record.get("confirmed") || record.get("posted") ) {
			this._disableAllFields_();
			return false;
		}
	},
	
	_endDefine_: function() {
		this._controller_.on("afterDoServiceSuccess", function(dc, response, name, options) {
		 	this._applyStates_(dc.record);
		 } , this )
	}
});
