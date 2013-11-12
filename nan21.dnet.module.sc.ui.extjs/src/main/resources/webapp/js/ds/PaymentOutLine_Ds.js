/**
 * DNet eBusiness Suite
 * Copyright: 2010-2013 Nan21 Electronics SRL. All rights reserved.
 * Use is subject to license terms.
 */
	
Ext.define(Dnet.ns.sc + "PaymentOutLine_Ds", {
	extend: 'Ext.data.Model',
	
	fields: [
		{name:"quantity", type:"float", useNull:true},
		{name:"unitPrice", type:"float", useNull:true},
		{name:"amount", type:"float", useNull:true},
		{name:"paymentId", type:"string"},
		{name:"paymentDocNo", type:"string"},
		{name:"companyId", type:"string"},
		{name:"company", type:"string"},
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
