/**
 * DNet eBusiness Suite
 * Copyright: 2010-2013 Nan21 Electronics SRL. All rights reserved.
 * Use is subject to license terms.
 */
Ext.define(Dnet.ns.sc + "Payable_Ui" , {
	extend: "dnet.core.ui.AbstractUi",
	alias: "widget.Payable_Ui",
	
	/**
	 * Data-controls definition
	 */
	_defineDcs_: function() {
		this._getBuilder_()	
		.addDc("payable", Ext.create(Dnet.ns.sc + "Payable_Dc" ,{}))
		;
	},

	/**
	 * Components definition
	 */
	_defineElements_: function() {
		this._getBuilder_()
		.addButton({name:"btnShowBpAccount", disabled:true, handler: this.onBtnShowBpAccount,
				stateManager:{ name:"selected_one", dc:"payable" }, scope:this})
		.addButton({name:"btnShowInvoice", disabled:true, handler: this.onBtnShowInvoice,
				stateManager:{ name:"selected_one", dc:"payable" , and: function(dc) {return (dc.record.get("invoiceId"));}}, scope:this})
		.addDcFilterFormView("payable", {name:"filter", xtype:"sc_Payable_Dc$Filter"})
		.addDcGridView("payable", {name:"list", xtype:"sc_Payable_Dc$List"})
		.addPanel({name:"main", layout:"border", defaults:{split:true}});
	},
	
	/**
	 * Combine the components
	 */
	_linkElements_: function() {
		this._getBuilder_()
		.addChildrenTo("main", ["filter", "list"], ["north", "center"])
		.addToolbarTo("main", "tlbPayableList");
	},
	
	/**
	 * Create toolbars
	 */
	_defineToolbars_: function() {
		this._getBuilder_()
		.beginToolbar("tlbPayableList", {dc: "payable"})
			.addTitle().addSeparator().addSeparator()
			.addQuery()
			.addSeparator().addSeparator()
			.addButtons([this._elems_.get("btnShowBpAccount") ,this._elems_.get("btnShowInvoice") ])
			.addReports()
		.end();
	}

	
	/**
	 * On-Click handler for button btnShowBpAccount
	 */
	,onBtnShowBpAccount: function() {
		var bundle = Dnet.bundle.sc;
		var frame = "VendorAccount_Ui";
		getApplication().showFrame(frame,{
			url:Dnet.buildUiPath(bundle, frame, false),
			params: {
				company: this._getDc_("payable").getRecord().get("company"),
				companyId: this._getDc_("payable").getRecord().get("companyId"),
				bpartner: this._getDc_("payable").getRecord().get("vendor"),
				bpartnerId: this._getDc_("payable").getRecord().get("vendorId")
			},
			callback: function (params) {
				this._when_called_to_edit_(params);
			}
		});
	}
	
	/**
	 * On-Click handler for button btnShowInvoice
	 */
	,onBtnShowInvoice: function() {
		var bundle = Dnet.bundle.sc;
		var frame = "PurchaseInvoice_Ui";
		getApplication().showFrame(frame,{
			url:Dnet.buildUiPath(bundle, frame, false),
			params: {
				companyId: this._getDc_("payable").getRecord().get("companyId"),
				company: this._getDc_("payable").getRecord().get("company"),
				id: this._getDc_("payable").getRecord().get("invoiceId"),
				docNo: this._getDc_("payable").getRecord().get("invoiceNo")
			},
			callback: function (params) {
				this._when_called_to_edit_(params);
			}
		});
	}
});
