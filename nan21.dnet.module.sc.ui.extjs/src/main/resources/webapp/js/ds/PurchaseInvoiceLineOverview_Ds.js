/**
 * DNet eBusiness Suite
 * Copyright: 2010-2013 Nan21 Electronics SRL. All rights reserved.
 * Use is subject to license terms.
 */
	
Ext.define(Dnet.ns.sc + "PurchaseInvoiceLineOverview_Ds", {
	extend: 'Ext.data.Model',
	
	fields: [
		{name:"docId", type:"string"},
		{name:"docNo", type:"string"},
		{name:"docDate", type:"date", dateFormat:Dnet.MODEL_DATE_FORMAT},
		{name:"docTypeId", type:"string"},
		{name:"docType", type:"string"},
		{name:"currencyId", type:"string"},
		{name:"currency", type:"string"},
		{name:"companyId", type:"string"},
		{name:"company", type:"string"},
		{name:"bpAccountId", type:"string"},
		{name:"bpartnerId", type:"string"},
		{name:"bpartner", type:"string"},
		{name:"bpartnerName", type:"string"},
		{name:"quantity", type:"float", useNull:true},
		{name:"unitPrice", type:"float", useNull:true},
		{name:"netAmount", type:"float", useNull:true},
		{name:"taxAmount", type:"float", useNull:true},
		{name:"amount", type:"float", useNull:true},
		{name:"netAmountLoc", type:"float", useNull:true},
		{name:"taxAmountLoc", type:"float", useNull:true},
		{name:"amountLoc", type:"float", useNull:true},
		{name:"productAccountId", type:"string"},
		{name:"productId", type:"string"},
		{name:"product", type:"string"},
		{name:"productName", type:"string"},
		{name:"uomId", type:"string"},
		{name:"uom", type:"string"},
		{name:"id", type:"string"},
		{name:"clientId", type:"string"},
		{name:"createdAt", type:"date", dateFormat:Dnet.MODEL_DATE_FORMAT},
		{name:"modifiedAt", type:"date", dateFormat:Dnet.MODEL_DATE_FORMAT},
		{name:"createdBy", type:"string"},
		{name:"modifiedBy", type:"string"},
		{name:"notes", type:"string"},
		{name:"active", type:"boolean"},
		{name:"version", type:"int", useNull:true},
		{name:"refid", type:"string"},
		{name:"entityAlias", type:"string"},
		{name:"entityFqn", type:"string"}
	]
});

Dnet.createFilterModelFromRecordModel({
	initFilter: function() {
		this.set("company", getApplication().getSession().company.code);
		this.set("companyId", getApplication().getSession().company.id);
	},
	fields: [
		{name:"docDate_From",type:"date", dateFormat:Dnet.MODEL_DATE_FORMAT},
		{name:"docDate_To",type:"date", dateFormat:Dnet.MODEL_DATE_FORMAT},
		{name:"quantity_From",type:"float", useNull:true},
		{name:"quantity_To",type:"float", useNull:true},
		{name:"unitPrice_From",type:"float", useNull:true},
		{name:"unitPrice_To",type:"float", useNull:true},
		{name:"netAmount_From",type:"float", useNull:true},
		{name:"netAmount_To",type:"float", useNull:true}
	],
	recordModelFqn: Dnet.ns.sc + "PurchaseInvoiceLineOverview_Ds"
});

Ext.define(Dnet.ns.sc + "PurchaseInvoiceLineOverview_DsParam", {
	extend: 'Ext.data.Model',
	
	fields: [
		{name:"filterPeriod", type:"string", forFilter:true}
	]
});
