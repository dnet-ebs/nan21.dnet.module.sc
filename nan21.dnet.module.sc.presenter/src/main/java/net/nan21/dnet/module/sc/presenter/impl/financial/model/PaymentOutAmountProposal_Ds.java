/**
 * DNet eBusiness Suite
 * Copyright: 2010-2013 Nan21 Electronics SRL. All rights reserved.
 * Use is subject to license terms.
 */
package net.nan21.dnet.module.sc.presenter.impl.financial.model;

import java.math.BigDecimal;
import java.util.Date;
import net.nan21.dnet.core.api.annotation.Ds;
import net.nan21.dnet.core.api.annotation.DsField;
import net.nan21.dnet.core.api.annotation.SortField;
import net.nan21.dnet.core.presenter.model.AbstractAuditableDs;
import net.nan21.dnet.module.tx.domain.impl.financial.AmountOwed;

@Ds(entity = AmountOwed.class, jpqlWhere = " e.amountDue <> 0 and e.sale = false ", sort = {@SortField(field = PaymentOutAmountProposal_Ds.f_dueDate)})
public class PaymentOutAmountProposal_Ds
		extends
			AbstractAuditableDs<AmountOwed> {

	public static final String f_companyId = "companyId";
	public static final String f_company = "company";
	public static final String f_vendorAccountId = "vendorAccountId";
	public static final String f_currencyId = "currencyId";
	public static final String f_currency = "currency";
	public static final String f_dueDate = "dueDate";
	public static final String f_amountInitial = "amountInitial";
	public static final String f_amountPayed = "amountPayed";
	public static final String f_amountDue = "amountDue";
	public static final String f_currentPayment = "currentPayment";
	public static final String f_remainingAmount = "remainingAmount";

	@DsField(join = "left", path = "bpAccount.company.id")
	private String companyId;

	@DsField(join = "left", path = "bpAccount.company.code")
	private String company;

	@DsField(join = "left", path = "bpAccount.id")
	private String vendorAccountId;

	@DsField(join = "left", path = "currency.id")
	private String currencyId;

	@DsField(join = "left", path = "currency.code")
	private String currency;

	@DsField
	private Date dueDate;

	@DsField
	private BigDecimal amountInitial;

	@DsField
	private BigDecimal amountPayed;

	@DsField
	private BigDecimal amountDue;

	@DsField(fetch = false)
	private BigDecimal currentPayment;

	@DsField(fetch = false)
	private BigDecimal remainingAmount;

	public PaymentOutAmountProposal_Ds() {
		super();
	}

	public PaymentOutAmountProposal_Ds(AmountOwed e) {
		super(e);
	}

	public String getCompanyId() {
		return this.companyId;
	}

	public void setCompanyId(String companyId) {
		this.companyId = companyId;
	}

	public String getCompany() {
		return this.company;
	}

	public void setCompany(String company) {
		this.company = company;
	}

	public String getVendorAccountId() {
		return this.vendorAccountId;
	}

	public void setVendorAccountId(String vendorAccountId) {
		this.vendorAccountId = vendorAccountId;
	}

	public String getCurrencyId() {
		return this.currencyId;
	}

	public void setCurrencyId(String currencyId) {
		this.currencyId = currencyId;
	}

	public String getCurrency() {
		return this.currency;
	}

	public void setCurrency(String currency) {
		this.currency = currency;
	}

	public Date getDueDate() {
		return this.dueDate;
	}

	public void setDueDate(Date dueDate) {
		this.dueDate = dueDate;
	}

	public BigDecimal getAmountInitial() {
		return this.amountInitial;
	}

	public void setAmountInitial(BigDecimal amountInitial) {
		this.amountInitial = amountInitial;
	}

	public BigDecimal getAmountPayed() {
		return this.amountPayed;
	}

	public void setAmountPayed(BigDecimal amountPayed) {
		this.amountPayed = amountPayed;
	}

	public BigDecimal getAmountDue() {
		return this.amountDue;
	}

	public void setAmountDue(BigDecimal amountDue) {
		this.amountDue = amountDue;
	}

	public BigDecimal getCurrentPayment() {
		return this.currentPayment;
	}

	public void setCurrentPayment(BigDecimal currentPayment) {
		this.currentPayment = currentPayment;
	}

	public BigDecimal getRemainingAmount() {
		return this.remainingAmount;
	}

	public void setRemainingAmount(BigDecimal remainingAmount) {
		this.remainingAmount = remainingAmount;
	}
}
