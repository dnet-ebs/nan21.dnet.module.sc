/**
 * DNet eBusiness Suite
 * Copyright: 2010-2013 Nan21 Electronics SRL. All rights reserved.
 * Use is subject to license terms.
 */
Ext.define(Dnet.ns.sc + "PaymentOut_Dc" , {
	extend: "dnet.core.dc.AbstractDc",
	filterModel: Dnet.ns.sc + "PaymentOut_DsFilter",
	paramModel: Dnet.ns.sc + "PaymentOut_DsParam",
	recordModel: Dnet.ns.sc + "PaymentOut_Ds"
});

/* ================= FILTER FORM: Filter ================= */			

Ext.define(Dnet.ns.sc + "PaymentOut_Dc$Filter" , {
	extend: "dnet.core.dc.view.AbstractDcvFilterForm",
	alias: "widget.sc_PaymentOut_Dc$Filter",

	/**
	 * Components definition
	 */	
	_defineElements_: function() {
		this._getBuilder_()
		
		/* =========== controls =========== */
		.addLov({name:"docType", dataIndex:"docType", xtype:"md_DocTypes_Lov", caseRestriction:"uppercase",
			retFieldMapping: [{lovField:"id", dsField: "docTypeId"} ],
			filterFieldMapping: [{lovField:"category", value: "payment"} ]})
		.addLov({name:"company", dataIndex:"company", allowBlank:false, xtype:"md_OrgsLegalEntity_Lov", caseRestriction:"uppercase",
			retFieldMapping: [{lovField:"id", dsField: "companyId"} ]})
		.addLov({name:"vendor", dataIndex:"vendor", xtype:"md_VendorAccounts_Lov", caseRestriction:"uppercase",
			retFieldMapping: [{lovField:"id", dsField: "vendorAccountId"} ],
			filterFieldMapping: [{lovField:"companyId", dsField: "companyId"} ]})
		.addLov({name:"currency", dataIndex:"currency", xtype:"bd_Currencies_Lov", caseRestriction:"uppercase",
			retFieldMapping: [{lovField:"id", dsField: "currencyId"} ]})
		.addLov({name:"finAccount", dataIndex:"finAccount", xtype:"md_FinancialAccounts_Lov", caseRestriction:"uppercase",
			retFieldMapping: [{lovField:"id", dsField: "finAccountId"} ],
			filterFieldMapping: [{lovField:"companyId", dsField: "companyId"} ]})
		.addCombo({ xtype:"combo", name:"usage", dataIndex:"usage", store:[ "amounts", "invoice", "items"]})
		.addLov({name:"docNo", dataIndex:"docNo", xtype:"sc_PaymentsOut_Lov",
			retFieldMapping: [{lovField:"id", dsField: "id"} ],
			filterFieldMapping: [{lovField:"companyId", dsField: "companyId"} ]})
		.addTextField({ name:"sourceDocNo", dataIndex:"sourceDocNo"})
		.addBooleanField({ name:"confirmed", dataIndex:"confirmed"})
		.addBooleanField({ name:"posted", dataIndex:"posted"})
		.addLov({name:"filterPeriod", paramIndex:"filterPeriod", xtype:"md_FiscalPeriods_Lov",
			retFieldMapping: [{lovField:"startDate", dsField: "docDate_From"} ,{lovField:"endDate", dsField: "docDate_To"} ]})
		.addDateField({name:"docDate_From", dataIndex:"docDate_From", emptyText:"From" })
		.addDateField({name:"docDate_To", dataIndex:"docDate_To", emptyText:"To" })
		.addFieldContainer({name: "docDate"})
			.addChildrenTo("docDate",["docDate_From", "docDate_To"])
		.addNumberField({name:"amount_From", dataIndex:"amount_From", emptyText:"From" })
		.addNumberField({name:"amount_To", dataIndex:"amount_To", emptyText:"To" })
		.addFieldContainer({name: "amount"})
			.addChildrenTo("amount",["amount_From", "amount_To"])
		
		/* =========== containers =========== */
		.addPanel({ name:"main", autoScroll:true, layout: {type:"hbox", align:'top', pack:'start', defaultMargins: {right:5, left:5}},
		autoScroll:true, padding:"0 30 5 0"})
		.addPanel({ name:"col1", width:250, layout:"form"})
		.addPanel({ name:"col2", width:250, layout:"form"})
		.addPanel({ name:"col3", width:300, layout:"form"})
		.addPanel({ name:"col4", width:170, layout:"form"});
	},

	/**
	 * Combine the components
	 */				
	_linkElements_: function() {
		this._getBuilder_()
		.addChildrenTo("main", ["col1", "col2", "col3", "col4"])
		.addChildrenTo("col1", ["company", "finAccount", "vendor", "usage"])
		.addChildrenTo("col2", ["docType", "docNo", "sourceDocNo", "currency"])
		.addChildrenTo("col3", ["filterPeriod", "docDate", "amount"])
		.addChildrenTo("col4", ["confirmed", "posted"]);
	}
});

/* ================= GRID: List ================= */

Ext.define(Dnet.ns.sc + "PaymentOut_Dc$List" , {
	extend: "dnet.core.dc.view.AbstractDcvGrid",
	alias: "widget.sc_PaymentOut_Dc$List",

	/**
	 * Columns definition
	 */
	_defineColumns_: function() {
		this._getBuilder_()
		.addTextColumn({ name:"company", dataIndex:"company", width:120})
		.addTextColumn({ name:"companyId", dataIndex:"companyId", hidden:true, width:100})
		.addTextColumn({ name:"finAccount", dataIndex:"finAccount", width:120})
		.addTextColumn({ name:"finAccountId", dataIndex:"finAccountId", hidden:true, width:100})
		.addTextColumn({ name:"vendor", dataIndex:"vendor", width:120})
		.addTextColumn({ name:"vendorName", dataIndex:"vendorName", hidden:true, width:200})
		.addTextColumn({ name:"vendorId", dataIndex:"vendorId", hidden:true, width:100})
		.addTextColumn({ name:"docType", dataIndex:"docType", width:120})
		.addTextColumn({ name:"docNo", dataIndex:"docNo", width:80})
		.addDateColumn({ name:"docDate", dataIndex:"docDate", _mask_: Masks.DATE})
		.addTextColumn({ name:"sourceDocNo", dataIndex:"sourceDocNo", width:80})
		.addNumberColumn({ name:"amount", dataIndex:"amount", decimals:6})
		.addTextColumn({ name:"currency", dataIndex:"currency", width:60})
		.addTextColumn({ name:"currencyId", dataIndex:"currencyId", hidden:true, width:100})
		.addNumberColumn({ name:"amountLoc", dataIndex:"amountLoc", hidden:true, decimals:6})
		.addNumberColumn({ name:"amountRef", dataIndex:"amountRef", hidden:true, decimals:6})
		.addTextColumn({ name:"usage", dataIndex:"usage", hidden:true, width:60})
		.addBooleanColumn({ name:"confirmed", dataIndex:"confirmed"})
		.addBooleanColumn({ name:"posted", dataIndex:"posted"})
		.addBooleanColumn({ name:"generated", dataIndex:"generated", hidden:true})
		.addDefaults();
	}
});

/* ================= EDIT FORM: Create ================= */

Ext.define(Dnet.ns.sc + "PaymentOut_Dc$Create" , {
	extend: "dnet.core.dc.view.AbstractDcvEditForm",
	alias: "widget.sc_PaymentOut_Dc$Create",

	/**
	 * Components definition
	 */
	_defineElements_: function() {
		this._getBuilder_()
		
		/* =========== controls =========== */
		.addLov({name:"docType", dataIndex:"docType", allowBlank:false, xtype:"md_DocTypes_Lov", caseRestriction:"uppercase",
			retFieldMapping: [{lovField:"id", dsField: "docTypeId"} ],
			filterFieldMapping: [{lovField:"category", value: "payment"} ]})
		.addLov({name:"company", dataIndex:"company", noUpdate:true, allowBlank:false, xtype:"md_OrgsLegalEntity_Lov", caseRestriction:"uppercase",
			retFieldMapping: [{lovField:"id", dsField: "companyId"} ]})
		.addLov({name:"vendor", dataIndex:"vendor", noUpdate:true, allowBlank:false, xtype:"md_VendorAccounts_Lov", caseRestriction:"uppercase",
			retFieldMapping: [{lovField:"id", dsField: "vendorAccountId"} ,{lovField:"bpartnerId", dsField: "vendorId"} ],
			filterFieldMapping: [{lovField:"companyId", dsField: "companyId"}, {lovField:"active", value: "true"} ]})
		.addNumberField({name:"amount", dataIndex:"amount", allowBlank:false, fieldCls:"important-field", decimals:6})
		.addLov({name:"currency", dataIndex:"currency", allowBlank:false, xtype:"bd_Currencies_Lov", caseRestriction:"uppercase",
			retFieldMapping: [{lovField:"id", dsField: "currencyId"} ],
			filterFieldMapping: [{lovField:"active", value: "true"} ]})
		.addDateField({name:"docDate", dataIndex:"docDate", allowBlank:false})
		
		/* =========== containers =========== */
		.addPanel({ name:"main", autoScroll:true, width:300, layout:"form"});
	},

	/**
	 * Combine the components
	 */			
	_linkElements_: function() {
		this._getBuilder_()
		.addChildrenTo("main", ["company", "docType", "vendor", "docDate", "amount", "currency"]);
	}
});

/* ================= EDIT FORM: Edit ================= */

Ext.define(Dnet.ns.sc + "PaymentOut_Dc$Edit" , {
	extend: "dnet.core.dc.view.AbstractDcvEditForm",
	alias: "widget.sc_PaymentOut_Dc$Edit",

	/**
	 * Components definition
	 */
	_defineElements_: function() {
		this._getBuilder_()
		
		/* =========== controls =========== */
		.addTextField({ name:"docType", dataIndex:"docType", noEdit:true , caseRestriction:"uppercase"})
		.addTextField({ name:"docNo", dataIndex:"docNo", noEdit:true })
		.addTextField({ name:"sourceDocNo", dataIndex:"sourceDocNo"})
		.addDateField({name:"docDate", dataIndex:"docDate", noEdit:true })
		.addTextField({ name:"company", dataIndex:"company", noEdit:true , caseRestriction:"uppercase"})
		.addTextField({ name:"vendor", dataIndex:"vendor", noEdit:true , caseRestriction:"uppercase"})
		.addTextField({ name:"vendorName", dataIndex:"vendorName", noEdit:true })
		.addCombo({ xtype:"combo", name:"usage", dataIndex:"usage", store:[ "amounts", "invoice", "items"]})
		.addTextField({ name:"currency", dataIndex:"currency", noEdit:true , fieldCls:"important-field", caseRestriction:"uppercase"})
		.addNumberField({name:"amount", dataIndex:"amount", allowBlank:false, fieldCls:"important-field", decimals:6})
		.addLov({name:"finAccount", dataIndex:"finAccount", xtype:"md_FinancialAccounts_Lov", caseRestriction:"uppercase",
			retFieldMapping: [{lovField:"id", dsField: "finAccountId"} ],
			filterFieldMapping: [{lovField:"companyId", dsField: "companyId"}, {lovField:"currencyId", dsField: "currencyId"} ]})
		.addTextArea({ name:"notes", dataIndex:"notes", height:70})
		.addBooleanField({ name:"confirmed", dataIndex:"confirmed", noEdit:true })
		.addBooleanField({ name:"posted", dataIndex:"posted", noEdit:true })
		
		/* =========== containers =========== */
		.addPanel({ name:"main", autoScroll:true, layout: {type:"hbox", align:'top', pack:'start', defaultMargins: {right:5, left:5}},
		autoScroll:true, padding:"0 30 5 0"})
		.addPanel({ name:"col1", width:250, layout:"form", xtype:"fieldset", border:true, collapsible:false})
		.addPanel({ name:"col2", width:280, layout:"form", xtype:"fieldset", border:true, collapsible:false})
		.addPanel({ name:"col3", width:250, layout:"form"})
		.addPanel({ name:"col4", width:170, layout:"form"})
		.addPanel({ name:"col5", width:250, layout:"form", defaults:{labelAlign:"top"}});
	},

	/**
	 * Combine the components
	 */			
	_linkElements_: function() {
		this._getBuilder_()
		.addChildrenTo("main", ["col1", "col2", "col3", "col4", "col5"])
		.addChildrenTo("col1", ["docType", "docDate", "docNo", "sourceDocNo"])
		.addChildrenTo("col2", ["company", "finAccount", "vendor"])
		.addChildrenTo("col3", ["usage", "amount", "currency"])
		.addChildrenTo("col4", ["confirmed", "posted"])
		.addChildrenTo("col5", ["notes"]);
	},
	/* ==================== Business functions ==================== */
	
	_beforeApplyStates_: function(record) {
		if (record.get("confirmed") || record.get("posted") ) {
			this._disableAllFields_();
			return false;
		}
	},
	
	_endDefine_: function() {
		this._controller_.on("afterDoServiceSuccess", function(dc, response, name, options) {
		 	this._applyStates_(dc.record);
		 } , this )
	}
});
