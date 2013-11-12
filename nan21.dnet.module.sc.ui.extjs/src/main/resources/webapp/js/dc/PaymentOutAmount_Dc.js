/**
 * DNet eBusiness Suite
 * Copyright: 2010-2013 Nan21 Electronics SRL. All rights reserved.
 * Use is subject to license terms.
 */
Ext.define(Dnet.ns.sc + "PaymentOutAmount_Dc" , {
	extend: "dnet.core.dc.AbstractDc",
	filterModel: Dnet.ns.sc + "PaymentOutAmount_DsFilter",
	recordModel: Dnet.ns.sc + "PaymentOutAmount_Ds"
});

/* ================= FILTER FORM: Filter ================= */			

Ext.define(Dnet.ns.sc + "PaymentOutAmount_Dc$Filter" , {
	extend: "dnet.core.dc.view.AbstractDcvFilterForm",
	alias: "widget.sc_PaymentOutAmount_Dc$Filter",

	/**
	 * Components definition
	 */	
	_defineElements_: function() {
		this._getBuilder_()
		
		/* =========== controls =========== */
		.addLov({name:"company", dataIndex:"company", allowBlank:false, xtype:"md_OrgsLegalEntity_Lov", caseRestriction:"uppercase",
			retFieldMapping: [{lovField:"id", dsField: "companyId"} ]})
		.addLov({name:"vendor", dataIndex:"vendor", xtype:"md_VendorAccounts_Lov", caseRestriction:"uppercase",
			retFieldMapping: [{lovField:"id", dsField: "vendorAccountId"} ],
			filterFieldMapping: [{lovField:"companyId", dsField: "companyId"} ]})
		.addLov({name:"currency", dataIndex:"currency", xtype:"bd_Currencies_Lov", caseRestriction:"uppercase",
			retFieldMapping: [{lovField:"id", dsField: "currencyId"} ]})
		.addLov({name:"paymentDocNo", dataIndex:"paymentDocNo", xtype:"sc_PaymentsOut_Lov",
			retFieldMapping: [{lovField:"id", dsField: "id"} ],
			filterFieldMapping: [{lovField:"companyId", dsField: "companyId"} ]})
		.addLov({name:"invoice", dataIndex:"invoice", xtype:"sc_PurchaseInvoices_Lov",
			retFieldMapping: [{lovField:"id", dsField: "invoiceId"} ],
			filterFieldMapping: [{lovField:"companyId", dsField: "companyId"} ]})
		
		/* =========== containers =========== */
		.addPanel({ name:"main", autoScroll:true, layout: {type:"hbox", align:'top', pack:'start', defaultMargins: {right:5, left:5}},
		autoScroll:true, padding:"0 30 5 0"})
		.addPanel({ name:"col1", width:250, layout:"form"})
		.addPanel({ name:"col2", width:250, layout:"form"});
	},

	/**
	 * Combine the components
	 */				
	_linkElements_: function() {
		this._getBuilder_()
		.addChildrenTo("main", ["col1", "col2"])
		.addChildrenTo("col1", ["company", "vendor"])
		.addChildrenTo("col2", ["paymentDocNo", "invoice", "currency"]);
	}
});

/* ================= GRID: List ================= */

Ext.define(Dnet.ns.sc + "PaymentOutAmount_Dc$List" , {
	extend: "dnet.core.dc.view.AbstractDcvGrid",
	alias: "widget.sc_PaymentOutAmount_Dc$List",

	/**
	 * Columns definition
	 */
	_defineColumns_: function() {
		this._getBuilder_()
		.addTextColumn({ name:"company", dataIndex:"company", width:120})
		.addTextColumn({ name:"companyId", dataIndex:"companyId", hidden:true, width:100})
		.addTextColumn({ name:"vendor", dataIndex:"vendor", width:120})
		.addTextColumn({ name:"vendorName", dataIndex:"vendorName", hidden:true, width:200})
		.addTextColumn({ name:"vendorId", dataIndex:"vendorId", hidden:true, width:100})
		.addTextColumn({ name:"paymentDocNo", dataIndex:"paymentDocNo", width:80})
		.addTextColumn({ name:"paymentSourceDocNo", dataIndex:"paymentSourceDocNo", hidden:true, width:80})
		.addDateColumn({ name:"paymentDate", dataIndex:"paymentDate", _mask_: Masks.DATE})
		.addNumberColumn({ name:"paymentAmount", dataIndex:"paymentAmount", decimals:6})
		.addTextColumn({ name:"currency", dataIndex:"currency", width:60})
		.addTextColumn({ name:"currencyId", dataIndex:"currencyId", hidden:true, width:100})
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
