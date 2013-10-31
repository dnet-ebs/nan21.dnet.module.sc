/**
 * DNet eBusiness Suite
 * Copyright: 2010-2013 Nan21 Electronics SRL. All rights reserved.
 * Use is subject to license terms.
 */
Ext.define(Dnet.ns.sc + "PurchaseInvoiceLine_Dc" , {
	extend: "dnet.core.dc.AbstractDc",
	recordModel: Dnet.ns.sc + "PurchaseInvoiceLine_Ds"
});

/* ================= FILTER: FilterCtx ================= */


Ext.define(Dnet.ns.sc + "PurchaseInvoiceLine_Dc$FilterCtx" , {
	extend: "dnet.core.dc.view.AbstractDcvFilterPropGrid",
	alias: "widget.sc_PurchaseInvoiceLine_Dc$FilterCtx",

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

/* ================= GRID: CtxList ================= */

Ext.define(Dnet.ns.sc + "PurchaseInvoiceLine_Dc$CtxList" , {
	extend: "dnet.core.dc.view.AbstractDcvGrid",
	alias: "widget.sc_PurchaseInvoiceLine_Dc$CtxList",
	_noImport_: true,
	_noExport_: true,
	_noPrint_: true,

	/**
	 * Columns definition
	 */
	_defineColumns_: function() {
		this._getBuilder_()
		.addTextColumn({ name:"product", dataIndex:"product", width:150})
		.addTextColumn({ name:"productName", dataIndex:"productName", width:200})
		.addTextColumn({ name:"productId", dataIndex:"productId", hidden:true, width:100})
		.addNumberColumn({ name:"quantity", dataIndex:"quantity", decimals:6})
		.addTextColumn({ name:"uom", dataIndex:"uom", width:120})
		.addTextColumn({ name:"uomId", dataIndex:"uomId", hidden:true, width:100})
		.addNumberColumn({ name:"unitPrice", dataIndex:"unitPrice", decimals:6})
		.addNumberColumn({ name:"netAmount", dataIndex:"netAmount", decimals:6})
		.addNumberColumn({ name:"taxAmount", dataIndex:"taxAmount", decimals:6})
		.addNumberColumn({ name:"amount", dataIndex:"amount", decimals:6})
		.addTextColumn({ name:"tax", dataIndex:"tax", hidden:true, width:200})
		.addTextColumn({ name:"taxId", dataIndex:"taxId", hidden:true, width:100})
		.addTextColumn({ name:"invoiceId", dataIndex:"invoiceId", hidden:true, width:100})
		.addDefaults();
	}
});

/* ================= EDIT FORM: EditForm ================= */

Ext.define(Dnet.ns.sc + "PurchaseInvoiceLine_Dc$EditForm" , {
	extend: "dnet.core.dc.view.AbstractDcvEditForm",
	alias: "widget.sc_PurchaseInvoiceLine_Dc$EditForm",

	/**
	 * Components definition
	 */
	_defineElements_: function() {
		this._getBuilder_()
		
		/* =========== controls =========== */
		.addLov({name:"product", dataIndex:"product", allowBlank:false, xtype:"md_ProductAccounts_Lov", caseRestriction:"uppercase",
			retFieldMapping: [{lovField:"id", dsField: "productAccountId"} ,{lovField:"productId", dsField: "productId"} ,{lovField:"productName", dsField: "productName"} ,{lovField:"uom", dsField: "uom"} ,{lovField:"uomId", dsField: "uomId"} ],
			filterFieldMapping: [{lovField:"companyId", dsField: "companyId"}, {lovField:"purchase", value: "true"}, {lovField:"active", value: "true"} ]})
		.addHiddenField({ name:"productAccountId", dataIndex:"productAccountId",listeners:{
			change:{scope:this, fn:this.onProductChange}
		}})
		.addTextField({ name:"productName", dataIndex:"productName", noEdit:true })
		.addNumberField({name:"quantity", dataIndex:"quantity", allowBlank:false, decimals:6,listeners:{
			change:{scope:this, fn:this.calcNetAmount}
		}})
		.addTextField({ name:"uom", dataIndex:"uom", noEdit:true , caseRestriction:"uppercase"})
		.addNumberField({name:"unitPrice", dataIndex:"unitPrice", allowBlank:false, decimals:6,listeners:{
			change:{scope:this, fn:this.calcNetAmount}
		}})
		.addLov({name:"tax", dataIndex:"tax", allowBlank:false, xtype:"md_TaxesApplicable_Lov",
			retFieldMapping: [{lovField:"id", dsField: "taxId"} ]})
		.addTextArea({ name:"notes", dataIndex:"notes", height:60})
		.addNumberField({name:"netAmount", dataIndex:"netAmount", noEdit:true , decimals:6})
		.addNumberField({name:"taxAmount", dataIndex:"taxAmount", noEdit:true , decimals:6})
		.addNumberField({name:"amount", dataIndex:"amount", noEdit:true , fieldCls:"important-field", decimals:6})
		
		/* =========== containers =========== */
		.addPanel({ name:"main", autoScroll:true, layout: {type:"hbox", align:'top', pack:'start', defaultMargins: {right:5, left:5}},
		autoScroll:true, padding:"0 30 5 0"})
		.addPanel({ name:"col1"})
		.addPanel({ name:"col4", width:400, layout:"form"})
		.addPanel({ name:"row1", width:400, layout:"form"})
		.addPanel({ name:"row2", layout: {type:"hbox", align:'top', pack:'start', defaultMargins: {right:5, left:5}}})
		.addPanel({ name:"col2", width:250, layout:"form"})
		.addPanel({ name:"col3", width:250, layout:"form"});
	},

	/**
	 * Combine the components
	 */			
	_linkElements_: function() {
		this._getBuilder_()
		.addChildrenTo("main", ["col1", "col4"])
		.addChildrenTo("col1", ["row1", "row2"])
		.addChildrenTo("col4", ["notes"])
		.addChildrenTo("row1", ["productAccountId", "product", "productName"])
		.addChildrenTo("row2", ["col2", "col3"])
		.addChildrenTo("col2", ["uom", "quantity", "unitPrice", "tax"])
		.addChildrenTo("col3", ["netAmount", "taxAmount", "amount"]);
	},
	/* ==================== Business functions ==================== */
	
	onProductChange: function() {
		
		var r = this._controller_.record;
		if (r) {
			r.beginEdit();
			r.set("unitPrice", 0);
			r.set("netAmount", 0);
			r.set("taxAmount", 0);
			r.set("amount", 0);
			if (!r.get("productId")) {
				return ;
			}
			r.endEdit();
		}
		this._controller_.doRpcData({name:"onProductChange"})
	},
	
	calcNetAmount: function() {
		
		var r = this._controller_.record;
		if (r) {
			r.beginEdit();
			r.set("netAmount", r.get("unitPrice") * r.get("quantity"));
			r.set("taxAmount", "0");
			r.set("amount", "0");
			r.endEdit();
		} 
	}
});
