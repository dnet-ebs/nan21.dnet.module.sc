/**
 * DNet eBusiness Suite
 * Copyright: 2010-2013 Nan21 Electronics SRL. All rights reserved.
 * Use is subject to license terms.
 */
	
Ext.define(Dnet.ns.sc + "PaymentOutAmount_Ds", {
	extend: 'Ext.data.Model',
	
	fields: [
		{name:"companyId", type:"string"},
		{name:"company", type:"string"},
		{name:"vendorAccountId", type:"string"},
		{name:"vendorId", type:"string"},
		{name:"vendor", type:"string"},
		{name:"vendorName", type:"string"},
		{name:"paymentId", type:"string"},
		{name:"paymentDocNo", type:"string"},
		{name:"paymentSourceDocNo", type:"string"},
		{name:"paymentDate", type:"date", dateFormat:Dnet.MODEL_DATE_FORMAT},
		{name:"paymentAmount", type:"float", useNull:true},
		{name:"currentPayment", type:"float", useNull:true},
		{name:"amountId", type:"string"},
		{name:"amountInitial", type:"float", useNull:true},
		{name:"amountPayed", type:"float", useNull:true},
		{name:"amountDue", type:"float", useNull:true},
		{name:"currencyId", type:"string"},
		{name:"currency", type:"string"},
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
	initFilter: function() {
		this.set("companyId", getApplication().getSession().company.id);
		this.set("company", getApplication().getSession().company.code);
	},
	fields: [
		{name:"amountInitial_From",type:"float", useNull:true},
		{name:"amountInitial_To",type:"float", useNull:true}
	],
	recordModelFqn: Dnet.ns.sc + "PaymentOutAmount_Ds"
});
