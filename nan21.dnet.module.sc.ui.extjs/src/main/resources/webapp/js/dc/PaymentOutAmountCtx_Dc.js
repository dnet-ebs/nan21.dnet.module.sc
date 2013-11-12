/**
 * DNet eBusiness Suite
 * Copyright: 2010-2013 Nan21 Electronics SRL. All rights reserved.
 * Use is subject to license terms.
 */
Ext.define(Dnet.ns.sc + "PaymentOutAmountCtx_Dc" , {
	extend: "dnet.core.dc.AbstractDc",
	filterModel: Dnet.ns.sc + "PaymentOutAmountCtx_DsFilter",
	recordModel: Dnet.ns.sc + "PaymentOutAmountCtx_Ds"
});

/* ================= GRID: List ================= */

Ext.define(Dnet.ns.sc + "PaymentOutAmountCtx_Dc$List" , {
	extend: "dnet.core.dc.view.AbstractDcvGrid",
	alias: "widget.sc_PaymentOutAmountCtx_Dc$List",

	/**
	 * Columns definition
	 */
	_defineColumns_: function() {
		this._getBuilder_()
		.addNumberColumn({ name:"currentPayment", dataIndex:"currentPayment", decimals:6})
		.addNumberColumn({ name:"amountInitial", dataIndex:"amountInitial", width:120, decimals:6})
		.addNumberColumn({ name:"amountPayed", dataIndex:"amountPayed", width:120, decimals:6})
		.addNumberColumn({ name:"amountDue", dataIndex:"amountDue", width:120, decimals:6})
		.addTextColumn({ name:"invoice", dataIndex:"invoice", width:120})
		.addDateColumn({ name:"invoiceDocDate", dataIndex:"invoiceDocDate", width:100, _mask_: Masks.DATE})
		.addTextColumn({ name:"paymentId", dataIndex:"paymentId", hidden:true, width:100})
		.addTextColumn({ name:"txAmountId", dataIndex:"amountId", hidden:true, width:100})
		.addDefaults();
	}
});
