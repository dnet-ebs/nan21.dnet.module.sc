/**
 * DNet eBusiness Suite
 * Copyright: 2010-2013 Nan21 Electronics SRL. All rights reserved.
 * Use is subject to license terms.
 */
package net.nan21.dnet.module.sc.presenter.impl.financial.model;

import java.math.BigDecimal;

public class PaymentOutAmountProposal_DsParam {

	public static final String f_businessPartner = "businessPartner";
	public static final String f_businessPartnerName = "businessPartnerName";
	public static final String f_receivedAmount = "receivedAmount";
	public static final String f_unAllocatedAmount = "unAllocatedAmount";
	public static final String f_paymentCurrency = "paymentCurrency";
	public static final String f_paymentId = "paymentId";

	private String businessPartner;

	private String businessPartnerName;

	private BigDecimal receivedAmount;

	private BigDecimal unAllocatedAmount;

	private String paymentCurrency;

	private String paymentId;

	public String getBusinessPartner() {
		return this.businessPartner;
	}

	public void setBusinessPartner(String businessPartner) {
		this.businessPartner = businessPartner;
	}

	public String getBusinessPartnerName() {
		return this.businessPartnerName;
	}

	public void setBusinessPartnerName(String businessPartnerName) {
		this.businessPartnerName = businessPartnerName;
	}

	public BigDecimal getReceivedAmount() {
		return this.receivedAmount;
	}

	public void setReceivedAmount(BigDecimal receivedAmount) {
		this.receivedAmount = receivedAmount;
	}

	public BigDecimal getUnAllocatedAmount() {
		return this.unAllocatedAmount;
	}

	public void setUnAllocatedAmount(BigDecimal unAllocatedAmount) {
		this.unAllocatedAmount = unAllocatedAmount;
	}

	public String getPaymentCurrency() {
		return this.paymentCurrency;
	}

	public void setPaymentCurrency(String paymentCurrency) {
		this.paymentCurrency = paymentCurrency;
	}

	public String getPaymentId() {
		return this.paymentId;
	}

	public void setPaymentId(String paymentId) {
		this.paymentId = paymentId;
	}
}
