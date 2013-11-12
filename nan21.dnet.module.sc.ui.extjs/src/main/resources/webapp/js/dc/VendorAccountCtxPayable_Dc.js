/**
 * DNet eBusiness Suite
 * Copyright: 2010-2013 Nan21 Electronics SRL. All rights reserved.
 * Use is subject to license terms.
 */
Ext.define(Dnet.ns.sc + "VendorAccountCtxPayable_Dc" , {
	extend: "dnet.core.dc.AbstractDc",
	filterModel: Dnet.ns.sc + "Payable_DsFilter",
	recordModel: Dnet.ns.sc + "Payable_Ds"
});

/* ================= GRID: List ================= */

Ext.define(Dnet.ns.sc + "VendorAccountCtxPayable_Dc$List" , {
	extend: "dnet.core.dc.view.AbstractDcvGrid",
	alias: "widget.sc_VendorAccountCtxPayable_Dc$List",
	_noImport_: true,

	/**
	 * Columns definition
	 */
	_defineColumns_: function() {
		this._getBuilder_()
		.addTextColumn({ name:"vendorId", dataIndex:"vendorId", hidden:true, width:100})
		.addDateColumn({ name:"dueDate", dataIndex:"dueDate", _mask_: Masks.DATE})
		.addNumberColumn({ name:"dueInDays", dataIndex:"dueInDays", sortable:false, width:60})
		.addNumberColumn({ name:"amountInitial", dataIndex:"amountInitial", width:120, decimals:6})
		.addNumberColumn({ name:"amountPayed", dataIndex:"amountPayed", width:120, decimals:6})
		.addNumberColumn({ name:"amountDue", dataIndex:"amountDue", width:120, decimals:6})
		.addTextColumn({ name:"currency", dataIndex:"currency", width:60})
		.addTextColumn({ name:"currencyId", dataIndex:"currencyId", hidden:true, width:100})
		.addTextColumn({ name:"invoiceNo", dataIndex:"invoiceNo", width:80})
		.addDateColumn({ name:"invoiceDate", dataIndex:"invoiceDate", _mask_: Masks.DATE})
		.addTextColumn({ name:"invoiceId", dataIndex:"invoiceId", hidden:true, width:80})
		.addDefaults();
	}
});
