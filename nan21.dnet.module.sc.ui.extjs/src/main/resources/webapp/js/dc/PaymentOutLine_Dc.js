/**
 * DNet eBusiness Suite
 * Copyright: 2010-2013 Nan21 Electronics SRL. All rights reserved.
 * Use is subject to license terms.
 */
Ext.define(Dnet.ns.sc + "PaymentOutLine_Dc" , {
	extend: "dnet.core.dc.AbstractDc",
	recordModel: Dnet.ns.sc + "PaymentOutLine_Ds"
});

/* ================= FILTER: FilterCtx ================= */


Ext.define(Dnet.ns.sc + "PaymentOutLine_Dc$FilterCtx" , {
	extend: "dnet.core.dc.view.AbstractDcvFilterPropGrid",
	alias: "widget.sc_PaymentOutLine_Dc$FilterCtx",

	_defineElements_: function() {
		this._getBuilder_()
			/* controls */
			.addLov({xtype:"md_ProductAccounts_Lov", name:"product", dataIndex:"product", caseRestriction:"uppercase",
				editor:{_fqn_:Dnet.ns.md + "ProductAccounts_Lov" , selectOnFocus:true, caseRestriction:"uppercase",
					retFieldMapping: [{lovField:"id", dsField: "productAccountId"} ],
					filterFieldMapping: [{lovField:"companyId", dsField: "companyId"} ]}})
		;
	}

});

/* ================= EDIT-GRID: CtxList ================= */

Ext.define(Dnet.ns.sc + "PaymentOutLine_Dc$CtxList" , {
	extend: "dnet.core.dc.view.AbstractDcvEditableGrid",
	alias: "widget.sc_PaymentOutLine_Dc$CtxList",
	_noImport_: true,
	_noExport_: true,
	_noPrint_: true,

	/**
	 * Columns definition
	 */
	_defineColumns_: function() {
		this._getBuilder_()	
		.addLov({name:"product", dataIndex:"product", xtype:"gridcolumn", width:120, 
			editor:{xtype:"md_ProductAccounts_Lov", selectOnFocus:true, allowBlank:false, caseRestriction:"uppercase",
				retFieldMapping: [{lovField:"id", dsField: "productAccountId"} ,{lovField:"productId", dsField: "productId"} ,{lovField:"productName", dsField: "productName"} ,{lovField:"uom", dsField: "uom"} ,{lovField:"uomId", dsField: "uomId"} ],
				filterFieldMapping: [{lovField:"companyId", dsField: "companyId"}, {lovField:"sale", value: "true"}, {lovField:"active", value: "true"} ]}})
		.addTextColumn({name:"productName", dataIndex:"productName", width:200})
		.addTextColumn({name:"productId", dataIndex:"productId", hidden:true, width:100, noEdit: true})
		.addNumberColumn({name:"quantity", dataIndex:"quantity", align:"right", decimals:6 })
		.addTextColumn({name:"uom", dataIndex:"uom", width:120, caseRestriction:"uppercase", noEdit: true})
		.addTextColumn({name:"uomId", dataIndex:"uomId", hidden:true, width:100, noEdit: true})
		.addNumberColumn({name:"unitPrice", dataIndex:"unitPrice", align:"right", decimals:6 })
		.addNumberColumn({name:"amount", dataIndex:"amount", align:"right", decimals:6 })
		.addTextColumn({name:"paymentId", dataIndex:"paymentId", hidden:true, width:100})
		.addDefaults();
	}
});
