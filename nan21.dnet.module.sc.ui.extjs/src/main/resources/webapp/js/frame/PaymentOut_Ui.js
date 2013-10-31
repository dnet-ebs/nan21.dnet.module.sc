/**
 * DNet eBusiness Suite
 * Copyright: 2010-2013 Nan21 Electronics SRL. All rights reserved.
 * Use is subject to license terms.
 */
Ext.define(Dnet.ns.sc + "PaymentOut_Ui" , {
	extend: "dnet.core.ui.AbstractUi",
	alias: "widget.PaymentOut_Ui",
	
	/**
	 * Data-controls definition
	 */
	_defineDcs_: function() {
		this._getBuilder_()	
		.addDc("payment", Ext.create(Dnet.ns.sc + "PaymentOut_Dc" ,{}))
		;
	},

	/**
	 * Components definition
	 */
	_defineElements_: function() {
		this._getBuilder_()
		.addDcFilterFormView("payment", {name:"paymentFilter", xtype:"sc_PaymentOut_Dc$Filter"})
		.addDcGridView("payment", {name:"paymentList", xtype:"sc_PaymentOut_Dc$List"})
		.addDcFormView("payment", {name:"paymentEdit", xtype:"sc_PaymentOut_Dc$Edit"})
		.addPanel({name:"main", layout:"card", activeItem:0})
		.addPanel({name:"canvas1", preventHeader:true, isCanvas:true, layout:"border", defaults:{split:true}})
		.addPanel({name:"canvas2", preventHeader:true, isCanvas:true, layout:"border", defaults:{split:true}});
	},
	
	/**
	 * Combine the components
	 */
	_linkElements_: function() {
		this._getBuilder_()
		.addChildrenTo("main", ["canvas1", "canvas2"])
		.addChildrenTo("canvas1", ["paymentFilter", "paymentList"], ["north", "center"])
		.addChildrenTo("canvas2", ["paymentEdit"], ["center"])
		.addToolbarTo("canvas1", "tlbPaymentList")
		.addToolbarTo("canvas2", "tlbPaymentEdit");
	},
	
	/**
	 * Create toolbars
	 */
	_defineToolbars_: function() {
		this._getBuilder_()
		.beginToolbar("tlbPaymentList", {dc: "payment"})
			.addTitle().addSeparator().addSeparator()
			.addQuery().addEdit().addNew().addCopy().addDeleteSelected()
			.addReports()
		.end()
		.beginToolbar("tlbPaymentEdit", {dc: "payment"})
			.addTitle().addSeparator().addSeparator()
			.addBack().addSave().addNew().addCopy().addCancel().addPrevRec().addNextRec()
			.addReports()
		.end();
	}

});
