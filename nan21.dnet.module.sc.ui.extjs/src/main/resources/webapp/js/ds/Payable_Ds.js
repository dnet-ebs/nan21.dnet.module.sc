/**
 * DNet eBusiness Suite
 * Copyright: 2010-2013 Nan21 Electronics SRL. All rights reserved.
 * Use is subject to license terms.
 */
	
Ext.define(Dnet.ns.sc + "Payable_Ds", {
	extend: 'Ext.data.Model',
	
	fields: [
		{name:"dueDate", type:"date", dateFormat:Dnet.MODEL_DATE_FORMAT},
		{name:"dueInDays", type:"int", useNull:true},
		{name:"amount", type:"float", useNull:true},
		{name:"amountPayed", type:"float", useNull:true},
		{name:"amountRemained", type:"float", useNull:true},
		{name:"companyId", type:"string"},
		{name:"company", type:"string"},
		{name:"bpAccountId", type:"string"},
		{name:"vendorId", type:"string"},
		{name:"vendor", type:"string"},
		{name:"vendorName", type:"string"},
		{name:"currencyId", type:"string"},
		{name:"currency", type:"string"},
		{name:"invoiceId", type:"string"},
		{name:"invoiceNo", type:"string"},
		{name:"invoiceDate", type:"date", dateFormat:Dnet.MODEL_DATE_FORMAT},
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
		{name:"dueDate_From",type:"date", dateFormat:Dnet.MODEL_DATE_FORMAT},
		{name:"dueDate_To",type:"date", dateFormat:Dnet.MODEL_DATE_FORMAT},
		{name:"amount_From",type:"float", useNull:true},
		{name:"amount_To",type:"float", useNull:true},
		{name:"amountPayed_From",type:"float", useNull:true},
		{name:"amountPayed_To",type:"float", useNull:true},
		{name:"amountRemained_From",type:"float", useNull:true},
		{name:"amountRemained_To",type:"float", useNull:true}
	],
	recordModelFqn: Dnet.ns.sc + "Payable_Ds"
});
