/**
 * DNet eBusiness Suite
 * Copyright: 2010-2013 Nan21 Electronics SRL. All rights reserved.
 * Use is subject to license terms.
 */
	
Ext.define(Dnet.ns.sc + "PaymentOutAmountProposal_Ds", {
	extend: 'Ext.data.Model',
	
	fields: [
		{name:"companyId", type:"string"},
		{name:"company", type:"string"},
		{name:"vendorAccountId", type:"string"},
		{name:"currencyId", type:"string"},
		{name:"currency", type:"string"},
		{name:"dueDate", type:"date", dateFormat:Dnet.MODEL_DATE_FORMAT},
		{name:"amountInitial", type:"float", useNull:true},
		{name:"amountPayed", type:"float", useNull:true},
		{name:"amountDue", type:"float", useNull:true},
		{name:"currentPayment", type:"float", useNull:true},
		{name:"remainingAmount", type:"float", useNull:true},
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
	fields: [
		{name:"dueDate_From",type:"date", dateFormat:Dnet.MODEL_DATE_FORMAT},
		{name:"dueDate_To",type:"date", dateFormat:Dnet.MODEL_DATE_FORMAT},
		{name:"amountInitial_From",type:"float", useNull:true},
		{name:"amountInitial_To",type:"float", useNull:true},
		{name:"amountDue_From",type:"float", useNull:true},
		{name:"amountDue_To",type:"float", useNull:true}
	],
	recordModelFqn: Dnet.ns.sc + "PaymentOutAmountProposal_Ds"
});

Ext.define(Dnet.ns.sc + "PaymentOutAmountProposal_DsParam", {
	extend: 'Ext.data.Model',
	
	fields: [
		{name:"businessPartner", type:"string", forFilter:true},
		{name:"businessPartnerName", type:"string", forFilter:true},
		{name:"paymentCurrency", type:"string", forFilter:true},
		{name:"paymentId", type:"string"},
		{name:"receivedAmount", type:"float", forFilter:true, useNull:true},
		{name:"unAllocatedAmount", type:"float", forFilter:true, useNull:true}
	]
});
