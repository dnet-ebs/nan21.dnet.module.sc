/**
 * DNet eBusiness Suite
 * Copyright: 2010-2013 Nan21 Electronics SRL. All rights reserved.
 * Use is subject to license terms.
 */
Ext.define(Dnet.ns.sc + "PurchaseInvoiceLineOverview_Dc" , {
	extend: "dnet.core.dc.AbstractDc",
	filterModel: Dnet.ns.sc + "PurchaseInvoiceLineOverview_DsFilter",
	paramModel: Dnet.ns.sc + "PurchaseInvoiceLineOverview_DsParam",
	recordModel: Dnet.ns.sc + "PurchaseInvoiceLineOverview_Ds"
});

/* ================= FILTER FORM: Filter ================= */			

Ext.define(Dnet.ns.sc + "PurchaseInvoiceLineOverview_Dc$Filter" , {
	extend: "dnet.core.dc.view.AbstractDcvFilterForm",
	alias: "widget.sc_PurchaseInvoiceLineOverview_Dc$Filter",

	/**
	 * Components definition
	 */	
	_defineElements_: function() {
		this._getBuilder_()
		
		/* =========== controls =========== */
		.addLov({name:"docType", dataIndex:"docType", xtype:"md_DocTypes_Lov", caseRestriction:"uppercase",
			retFieldMapping: [{lovField:"id", dsField: "docTypeId"} ],
			filterFieldMapping: [{lovField:"category", value: "purchase-invoice"} ]})
		.addLov({name:"company", dataIndex:"company", allowBlank:false, xtype:"md_OrgsLegalEntity_Lov", caseRestriction:"uppercase",
			retFieldMapping: [{lovField:"id", dsField: "companyId"} ]})
		.addLov({name:"bpartner", dataIndex:"bpartner", xtype:"md_VendorAccounts_Lov", caseRestriction:"uppercase",
			retFieldMapping: [{lovField:"id", dsField: "bpAccountId"} ]})
		.addLov({name:"currency", dataIndex:"currency", xtype:"bd_Currencies_Lov", caseRestriction:"uppercase",
			retFieldMapping: [{lovField:"id", dsField: "currencyId"} ]})
		.addLov({name:"uom", dataIndex:"uom", xtype:"bd_Uoms_Lov", caseRestriction:"uppercase",
			retFieldMapping: [{lovField:"id", dsField: "uomId"} ]})
		.addLov({name:"docNo", dataIndex:"docNo", xtype:"sc_PurchaseInvoices_Lov",
			retFieldMapping: [{lovField:"id", dsField: "id"} ],
			filterFieldMapping: [{lovField:"companyId", dsField: "companyId"} ]})
		.addLov({name:"filterPeriod", paramIndex:"filterPeriod", xtype:"md_FiscalPeriods_Lov",
			retFieldMapping: [{lovField:"startDate", dsField: "docDate_From"} ,{lovField:"endDate", dsField: "docDate_To"} ]})
		.addLov({name:"product", dataIndex:"product", xtype:"md_ProductAccounts_Lov", caseRestriction:"uppercase",
			retFieldMapping: [{lovField:"id", dsField: "productAccountId"} ],
			filterFieldMapping: [{lovField:"companyId", dsField: "companyId"}, {lovField:"purchase", value: "true"} ]})
		.addDateField({name:"docDate_From", dataIndex:"docDate_From", emptyText:"From" })
		.addDateField({name:"docDate_To", dataIndex:"docDate_To", emptyText:"To" })
		.addFieldContainer({name: "docDate"})
			.addChildrenTo("docDate",["docDate_From", "docDate_To"])
		.addNumberField({name:"quantity_From", dataIndex:"quantity_From", emptyText:"From" })
		.addNumberField({name:"quantity_To", dataIndex:"quantity_To", emptyText:"To" })
		.addFieldContainer({name: "quantity"})
			.addChildrenTo("quantity",["quantity_From", "quantity_To"])
		.addNumberField({name:"unitPrice_From", dataIndex:"unitPrice_From", emptyText:"From" })
		.addNumberField({name:"unitPrice_To", dataIndex:"unitPrice_To", emptyText:"To" })
		.addFieldContainer({name: "unitPrice"})
			.addChildrenTo("unitPrice",["unitPrice_From", "unitPrice_To"])
		.addNumberField({name:"netAmount_From", dataIndex:"netAmount_From", emptyText:"From" })
		.addNumberField({name:"netAmount_To", dataIndex:"netAmount_To", emptyText:"To" })
		.addFieldContainer({name: "netAmount"})
			.addChildrenTo("netAmount",["netAmount_From", "netAmount_To"])
		
		/* =========== containers =========== */
		.addPanel({ name:"main", autoScroll:true, layout: {type:"hbox", align:'top', pack:'start', defaultMargins: {right:5, left:5}},
		autoScroll:true, padding:"0 30 5 0"})
		.addPanel({ name:"col1", width:250, layout:"form"})
		.addPanel({ name:"col3", width:220, layout:"form"})
		.addPanel({ name:"col4", width:300, layout:"form"})
		.addPanel({ name:"col5", width:300, layout:"form"});
	},

	/**
	 * Combine the components
	 */				
	_linkElements_: function() {
		this._getBuilder_()
		.addChildrenTo("main", ["col1", "col3", "col4", "col5"])
		.addChildrenTo("col1", ["company", "bpartner", "docType"])
		.addChildrenTo("col3", ["docNo", "currency", "uom"])
		.addChildrenTo("col4", ["filterPeriod", "docDate", "product"])
		.addChildrenTo("col5", ["quantity", "unitPrice", "netAmount"]);
	}
});

/* ================= GRID: List ================= */

Ext.define(Dnet.ns.sc + "PurchaseInvoiceLineOverview_Dc$List" , {
	extend: "dnet.core.dc.view.AbstractDcvGrid",
	alias: "widget.sc_PurchaseInvoiceLineOverview_Dc$List",
	_noImport_: true,

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
		.addTextColumn({ name:"docType", dataIndex:"docType", hidden:true, width:120})
		.addTextColumn({ name:"docNo", dataIndex:"docNo", hidden:true, width:80})
		.addDateColumn({ name:"docDate", dataIndex:"docDate", hidden:true, _mask_: Masks.DATE})
		.addTextColumn({ name:"productId", dataIndex:"productId", hidden:true, width:100})
		.addTextColumn({ name:"product", dataIndex:"product", width:120})
		.addTextColumn({ name:"productName", dataIndex:"productName", width:200})
		.addNumberColumn({ name:"quantity", dataIndex:"quantity", decimals:6})
		.addTextColumn({ name:"uomId", dataIndex:"uomId", hidden:true, width:100})
		.addTextColumn({ name:"uom", dataIndex:"uom", width:120})
		.addNumberColumn({ name:"unitPrice", dataIndex:"unitPrice", decimals:6})
		.addNumberColumn({ name:"netAmount", dataIndex:"netAmount", decimals:6})
		.addNumberColumn({ name:"taxAmount", dataIndex:"taxAmount", decimals:6})
		.addNumberColumn({ name:"amount", dataIndex:"amount", decimals:6})
		.addTextColumn({ name:"currency", dataIndex:"currency", width:120})
		.addDefaults();
	}
});

/* ================= EDIT FORM: DocView ================= */

Ext.define(Dnet.ns.sc + "PurchaseInvoiceLineOverview_Dc$DocView" , {
	extend: "dnet.core.dc.view.AbstractDcvEditForm",
	alias: "widget.sc_PurchaseInvoiceLineOverview_Dc$DocView",

	/**
	 * Components definition
	 */
	_defineElements_: function() {
		this._getBuilder_()
		
		/* =========== controls =========== */
		.addTextField({ name:"company", dataIndex:"company", noEdit:true , caseRestriction:"uppercase"})
		.addTextField({ name:"bpartner", dataIndex:"bpartner", noEdit:true , caseRestriction:"uppercase"})
		.addTextField({ name:"bpartnerName", dataIndex:"bpartnerName", noEdit:true , noLabel: true})
		.addTextField({ name:"docType", dataIndex:"docType", noEdit:true , noLabel: true, caseRestriction:"uppercase"})
		.addTextField({ name:"docNo", dataIndex:"docNo", noEdit:true , noLabel: true})
		.addDateField({name:"docDate", dataIndex:"docDate", noEdit:true , noLabel: true})
		.add({name:"doc", xtype: "fieldcontainer", layout: "hbox", items: [this._getConfig_("docType"),this._getConfig_("docNo"),this._getConfig_("docDate")]})
		
		/* =========== containers =========== */
		.addPanel({ name:"main", autoScroll:true, layout: {type:"hbox", align:'top', pack:'start', defaultMargins: {right:5, left:5}},
		autoScroll:true, padding:"0 30 5 0"})
		.addPanel({ name:"col1", width:300, layout:"form"})
		.addPanel({ name:"col2", width:400, layout:"form", defaults:{labelAlign:"right", labelWidth:130}});
	},

	/**
	 * Combine the components
	 */			
	_linkElements_: function() {
		this._getBuilder_()
		.addChildrenTo("main", ["col1", "col2"])
		.addChildrenTo("col1", ["company", "bpartner"])
		.addChildrenTo("col2", ["doc", "bpartnerName"]);
	}
});
