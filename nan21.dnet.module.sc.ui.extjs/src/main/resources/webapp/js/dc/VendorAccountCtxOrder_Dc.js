/**
 * DNet eBusiness Suite
 * Copyright: 2010-2013 Nan21 Electronics SRL. All rights reserved.
 * Use is subject to license terms.
 */
Ext.define(Dnet.ns.sc + "VendorAccountCtxOrder_Dc" , {
	extend: "dnet.core.dc.AbstractDc",
	filterModel: Dnet.ns.sc + "PurchaseOrder_DsFilter",
	paramModel: Dnet.ns.sc + "PurchaseOrder_DsParam",
	recordModel: Dnet.ns.sc + "PurchaseOrder_Ds"
});

/* ================= FILTER: Filter ================= */


Ext.define(Dnet.ns.sc + "VendorAccountCtxOrder_Dc$Filter" , {
	extend: "dnet.core.dc.view.AbstractDcvFilterPropGrid",
	alias: "widget.sc_VendorAccountCtxOrder_Dc$Filter",

	_defineElements_: function() {
		this._getBuilder_()
			/* controls */
			.addTextField({ name:"docNo", dataIndex:"docNo"})
			.addLov({xtype:"md_DocTypes_Lov", name:"docType", dataIndex:"docType", caseRestriction:"uppercase",
				editor:{_fqn_:Dnet.ns.md + "DocTypes_Lov" , selectOnFocus:true, caseRestriction:"uppercase",
					retFieldMapping: [{lovField:"id", dsField: "docTypeId"} ],
					filterFieldMapping: [{lovField:"category", value: "purchase-order"} ]}})
			.addLov({xtype:"bd_Currencies_Lov", name:"currency", dataIndex:"currency", caseRestriction:"uppercase",
				editor:{_fqn_:Dnet.ns.bd + "Currencies_Lov" , selectOnFocus:true, caseRestriction:"uppercase",
					retFieldMapping: [{lovField:"id", dsField: "currencyId"} ]}})
			.addBooleanField({ name:"confirmed", dataIndex:"confirmed"})
		;
	}

});

/* ================= GRID: List ================= */

Ext.define(Dnet.ns.sc + "VendorAccountCtxOrder_Dc$List" , {
	extend: "dnet.core.dc.view.AbstractDcvGrid",
	alias: "widget.sc_VendorAccountCtxOrder_Dc$List",
	_noImport_: true,

	/**
	 * Columns definition
	 */
	_defineColumns_: function() {
		this._getBuilder_()
		.addTextColumn({ name:"company", dataIndex:"company", hidden:true, width:120})
		.addTextColumn({ name:"companyId", dataIndex:"companyId", hidden:true, width:100})
		.addTextColumn({ name:"bpartner", dataIndex:"bpartner", hidden:true, width:120})
		.addTextColumn({ name:"bpartnerName", dataIndex:"bpartnerName", hidden:true, width:200})
		.addTextColumn({ name:"bpartnerId", dataIndex:"bpartnerId", hidden:true, width:100})
		.addTextColumn({ name:"docType", dataIndex:"docType", width:120})
		.addTextColumn({ name:"docNo", dataIndex:"docNo", width:80})
		.addDateColumn({ name:"docDate", dataIndex:"docDate", _mask_: Masks.DATE})
		.addNumberColumn({ name:"netAmount", dataIndex:"netAmount", decimals:6})
		.addNumberColumn({ name:"taxAmount", dataIndex:"taxAmount", decimals:6})
		.addNumberColumn({ name:"amount", dataIndex:"amount", decimals:6})
		.addTextColumn({ name:"currency", dataIndex:"currency", width:60})
		.addTextColumn({ name:"currencyId", dataIndex:"currencyId", hidden:true, width:100})
		.addNumberColumn({ name:"netAmountLoc", dataIndex:"netAmountLoc", hidden:true, decimals:6})
		.addNumberColumn({ name:"taxAmountLoc", dataIndex:"taxAmountLoc", hidden:true, decimals:6})
		.addNumberColumn({ name:"amountLoc", dataIndex:"amountLoc", hidden:true, decimals:6})
		.addNumberColumn({ name:"netAmountRef", dataIndex:"netAmountRef", hidden:true, decimals:6})
		.addNumberColumn({ name:"taxAmountRef", dataIndex:"taxAmountRef", hidden:true, decimals:6})
		.addNumberColumn({ name:"amountRef", dataIndex:"amountRef", hidden:true, decimals:6})
		.addBooleanColumn({ name:"confirmed", dataIndex:"confirmed"})
		.addDefaults();
	}
});
