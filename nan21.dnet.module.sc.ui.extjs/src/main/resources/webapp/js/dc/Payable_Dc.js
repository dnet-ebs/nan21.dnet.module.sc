/**
 * DNet eBusiness Suite
 * Copyright: 2010-2013 Nan21 Electronics SRL. All rights reserved.
 * Use is subject to license terms.
 */
Ext.define(Dnet.ns.sc + "Payable_Dc" , {
	extend: "dnet.core.dc.AbstractDc",
	filterModel: Dnet.ns.sc + "Payable_DsFilter",
	recordModel: Dnet.ns.sc + "Payable_Ds"
});

/* ================= FILTER FORM: Filter ================= */			

Ext.define(Dnet.ns.sc + "Payable_Dc$Filter" , {
	extend: "dnet.core.dc.view.AbstractDcvFilterForm",
	alias: "widget.sc_Payable_Dc$Filter",

	/**
	 * Components definition
	 */	
	_defineElements_: function() {
		this._getBuilder_()
		
		/* =========== controls =========== */
		.addLov({name:"company", dataIndex:"company", allowBlank:false, xtype:"md_OrgsLegalEntity_Lov", caseRestriction:"uppercase",
			retFieldMapping: [{lovField:"id", dsField: "companyId"} ]})
		.addLov({name:"vendor", dataIndex:"vendor", xtype:"md_CustomerAccounts_Lov", caseRestriction:"uppercase",
			retFieldMapping: [{lovField:"id", dsField: "bpAccountId"} ],
			filterFieldMapping: [{lovField:"companyId", dsField: "companyId"} ]})
		.addLov({name:"currency", dataIndex:"currency", xtype:"bd_Currencies_Lov", caseRestriction:"uppercase",
			retFieldMapping: [{lovField:"id", dsField: "currencyId"} ]})
		.addNumberField({name:"amountRemained_From", dataIndex:"amountRemained_From", emptyText:"From" })
		.addNumberField({name:"amountRemained_To", dataIndex:"amountRemained_To", emptyText:"To" })
		.addFieldContainer({name: "amountRemained", fieldLabel:"Amount Remained"})
			.addChildrenTo("amountRemained",["amountRemained_From", "amountRemained_To"])
		.addNumberField({name:"amountPayed_From", dataIndex:"amountPayed_From", emptyText:"From" })
		.addNumberField({name:"amountPayed_To", dataIndex:"amountPayed_To", emptyText:"To" })
		.addFieldContainer({name: "amountPayed", fieldLabel:"Amount Payed"})
			.addChildrenTo("amountPayed",["amountPayed_From", "amountPayed_To"])
		.addNumberField({name:"amount_From", dataIndex:"amount_From", emptyText:"From" })
		.addNumberField({name:"amount_To", dataIndex:"amount_To", emptyText:"To" })
		.addFieldContainer({name: "amount", fieldLabel:"Amount"})
			.addChildrenTo("amount",["amount_From", "amount_To"])
		.addDateField({name:"dueDate_From", dataIndex:"dueDate_From", emptyText:"From" })
		.addDateField({name:"dueDate_To", dataIndex:"dueDate_To", emptyText:"To" })
		.addFieldContainer({name: "dueDate", fieldLabel:"Due Date"})
			.addChildrenTo("dueDate",["dueDate_From", "dueDate_To"])
		
		/* =========== containers =========== */
		.addPanel({ name:"main", autoScroll:true, layout: {type:"hbox", align:'top', pack:'start', defaultMargins: {right:5, left:5}},
		autoScroll:true, padding:"0 30 5 0"})
		.addPanel({ name:"col1", width:250, layout:"form"})
		.addPanel({ name:"col2", width:330, layout:"form", defaults:{labelAlign:"right", labelWidth:130}})
		.addPanel({ name:"col3", width:310, layout:"form"});
	},

	/**
	 * Combine the components
	 */				
	_linkElements_: function() {
		this._getBuilder_()
		.addChildrenTo("main", ["col1", "col2", "col3"])
		.addChildrenTo("col1", ["company", "vendor", "currency"])
		.addChildrenTo("col2", ["amount", "amountPayed", "amountRemained"])
		.addChildrenTo("col3", ["dueDate"]);
	}
});

/* ================= GRID: List ================= */

Ext.define(Dnet.ns.sc + "Payable_Dc$List" , {
	extend: "dnet.core.dc.view.AbstractDcvGrid",
	alias: "widget.sc_Payable_Dc$List",
	_noImport_: true,

	/**
	 * Columns definition
	 */
	_defineColumns_: function() {
		this._getBuilder_()
		.addTextColumn({ name:"company", dataIndex:"company", width:120})
		.addTextColumn({ name:"companyId", dataIndex:"companyId", hidden:true, width:100})
		.addTextColumn({ name:"vendorId", dataIndex:"vendorId", hidden:true, width:100})
		.addTextColumn({ name:"vendor", dataIndex:"vendor", width:120})
		.addTextColumn({ name:"vendorName", dataIndex:"vendorName", hidden:true, width:200})
		.addDateColumn({ name:"dueDate", dataIndex:"dueDate", _mask_: Masks.DATE})
		.addNumberColumn({ name:"dueInDays", dataIndex:"dueInDays", sortable:false, width:60})
		.addNumberColumn({ name:"amount", dataIndex:"amount", width:120, decimals:6})
		.addNumberColumn({ name:"amountPayed", dataIndex:"amountPayed", width:120, decimals:6})
		.addNumberColumn({ name:"amountRemained", dataIndex:"amountRemained", width:120, decimals:6})
		.addTextColumn({ name:"currency", dataIndex:"currency", width:60})
		.addTextColumn({ name:"currencyId", dataIndex:"currencyId", hidden:true, width:100})
		.addTextColumn({ name:"invoiceNo", dataIndex:"invoiceNo", width:80})
		.addDateColumn({ name:"invoiceDate", dataIndex:"invoiceDate", _mask_: Masks.DATE})
		.addTextColumn({ name:"invoiceId", dataIndex:"invoiceId", hidden:true, width:80})
		.addDefaults();
	}
});
