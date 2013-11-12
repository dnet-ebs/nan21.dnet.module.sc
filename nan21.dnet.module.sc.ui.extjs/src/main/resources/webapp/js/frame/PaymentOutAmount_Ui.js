/**
 * DNet eBusiness Suite
 * Copyright: 2010-2013 Nan21 Electronics SRL. All rights reserved.
 * Use is subject to license terms.
 */
Ext.define(Dnet.ns.sc + "PaymentOutAmount_Ui" , {
	extend: "dnet.core.ui.AbstractUi",
	alias: "widget.PaymentOutAmount_Ui",
	
	/**
	 * Data-controls definition
	 */
	_defineDcs_: function() {
		this._getBuilder_()	
		.addDc("payamount", Ext.create(Dnet.ns.sc + "PaymentOutAmount_Dc" ,{}))
		;
	},

	/**
	 * Components definition
	 */
	_defineElements_: function() {
		this._getBuilder_()
		.addButton({name:"btnShowBpAccount", disabled:true, handler: this.onBtnShowBpAccount,
				stateManager:{ name:"selected_one", dc:"payamount" }, scope:this})
		.addButton({name:"btnShowInvoice", disabled:true, handler: this.onBtnShowInvoice,
				stateManager:{ name:"selected_one", dc:"payamount" , and: function(dc) {return (dc.record.get("invoiceId"));}}, scope:this})
		.addDcFilterFormView("payamount", {name:"filter", xtype:"sc_PaymentOutAmount_Dc$Filter"})
		.addDcGridView("payamount", {name:"list", xtype:"sc_PaymentOutAmount_Dc$List"})
		.addPanel({name:"main", layout:"border", defaults:{split:true}});
	},
	
	/**
	 * Combine the components
	 */
	_linkElements_: function() {
		this._getBuilder_()
		.addChildrenTo("main", ["filter", "list"], ["north", "center"])
		.addToolbarTo("main", "tlbPayamountList");
	},
	
	/**
	 * Create toolbars
	 */
	_defineToolbars_: function() {
		this._getBuilder_()
		.beginToolbar("tlbPayamountList", {dc: "payamount"})
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
				company: this._getDc_("payamount").getRecord().get("company"),
				companyId: this._getDc_("payamount").getRecord().get("companyId"),
				bpartner: this._getDc_("payamount").getRecord().get("vendor"),
				bpartnerId: this._getDc_("payamount").getRecord().get("vendorId")
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
				companyId: this._getDc_("payamount").getRecord().get("companyId"),
				company: this._getDc_("payamount").getRecord().get("company"),
				id: this._getDc_("payamount").getRecord().get("invoiceId"),
				docNo: this._getDc_("payamount").getRecord().get("invoice")
			},
			callback: function (params) {
				this._when_called_to_edit_(params);
			}
		});
	}
});
