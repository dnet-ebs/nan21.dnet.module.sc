/**
 * DNet eBusiness Suite
 * Copyright: 2010-2013 Nan21 Electronics SRL. All rights reserved.
 * Use is subject to license terms.
 */
	
Ext.define(Dnet.ns.sc + "PaymentOutAmountCtx_Ds", {
	extend: 'Ext.data.Model',
	
	fields: [
		{name:"paymentId", type:"string"},
		{name:"amountId", type:"string"},
		{name:"amountInitial", type:"float", useNull:true},
		{name:"amountPayed", type:"float", useNull:true},
		{name:"amountDue", type:"float", useNull:true},
		{name:"currentPayment", type:"float", useNull:true},
		{name:"invoiceId", type:"string"},
		{name:"invoice", type:"string"},
		{name:"invoiceDocDate", type:"date", dateFormat:Dnet.MODEL_DATE_FORMAT},
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
		{name:"amountInitial_From",type:"float", useNull:true},
		{name:"amountInitial_To",type:"float", useNull:true}
	],
	recordModelFqn: Dnet.ns.sc + "PaymentOutAmountCtx_Ds"
});
