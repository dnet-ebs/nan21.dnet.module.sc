/**
 * DNet eBusiness Suite
 * Copyright: 2010-2013 Nan21 Electronics SRL. All rights reserved.
 * Use is subject to license terms.
 */
Ext.define(Dnet.ns.sc + "PurchaseOrderLineTax_Dc" , {
	extend: "dnet.core.dc.AbstractDc",
	recordModel: Dnet.ns.sc + "PurchaseOrderLineTax_Ds"
});

/* ================= GRID: CtxList ================= */

Ext.define(Dnet.ns.sc + "PurchaseOrderLineTax_Dc$CtxList" , {
	extend: "dnet.core.dc.view.AbstractDcvGrid",
	alias: "widget.sc_PurchaseOrderLineTax_Dc$CtxList",
	_noImport_: true,
	_noExport_: true,
	_noPrint_: true,

	/**
	 * Columns definition
	 */
	_defineColumns_: function() {
		this._getBuilder_()
		.addTextColumn({ name:"tax", dataIndex:"tax", width:100})
		.addTextColumn({ name:"taxId", dataIndex:"taxId", hidden:true, width:100})
		.addNumberColumn({ name:"baseAmount", dataIndex:"baseAmount", decimals:6})
		.addNumberColumn({ name:"taxAmount", dataIndex:"taxAmount", decimals:6})
		.addTextColumn({ name:"lineId", dataIndex:"lineId", hidden:true, width:100})
		.addDefaults();
	}
});
