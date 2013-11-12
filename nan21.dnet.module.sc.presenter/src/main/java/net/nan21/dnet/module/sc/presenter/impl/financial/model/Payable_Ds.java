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
import net.nan21.dnet.core.presenter.model.AbstractAuditableDs;
import net.nan21.dnet.module.tx.domain.impl.financial.AmountOwed;

@Ds(entity = AmountOwed.class, jpqlWhere = " e.sale = false ")
public class Payable_Ds extends AbstractAuditableDs<AmountOwed> {

	public static final String f_dueDate = "dueDate";
	public static final String f_dueInDays = "dueInDays";
	public static final String f_amountInitial = "amountInitial";
	public static final String f_amountPayed = "amountPayed";
	public static final String f_amountDue = "amountDue";
	public static final String f_companyId = "companyId";
	public static final String f_company = "company";
	public static final String f_vendorAccountId = "vendorAccountId";
	public static final String f_vendorId = "vendorId";
	public static final String f_vendor = "vendor";
	public static final String f_vendorName = "vendorName";
	public static final String f_currencyId = "currencyId";
	public static final String f_currency = "currency";
	public static final String f_invoiceId = "invoiceId";
	public static final String f_invoiceNo = "invoiceNo";
	public static final String f_invoiceDate = "invoiceDate";

	@DsField
	private Date dueDate;

	@DsField(fetch = false)
	private Integer dueInDays;

	@DsField
	private BigDecimal amountInitial;

	@DsField
	private BigDecimal amountPayed;

	@DsField
	private BigDecimal amountDue;

	@DsField(join = "left", path = "bpAccount.company.id")
	private String companyId;

	@DsField(join = "left", path = "bpAccount.company.code")
	private String company;

	@DsField(join = "left", path = "bpAccount.id")
	private String vendorAccountId;

	@DsField(join = "left", path = "bpAccount.bpartner.id")
	private String vendorId;

	@DsField(join = "left", path = "bpAccount.bpartner.code")
	private String vendor;

	@DsField(join = "left", path = "bpAccount.bpartner.name")
	private String vendorName;

	@DsField(join = "left", path = "currency.id")
	private String currencyId;

	@DsField(join = "left", path = "currency.code")
	private String currency;

	@DsField(join = "left", path = "purchaseInvoice.id")
	private String invoiceId;

	@DsField(join = "left", path = "purchaseInvoice.docNo")
	private String invoiceNo;

	@DsField(join = "left", path = "purchaseInvoice.docDate")
	private Date invoiceDate;

	public Payable_Ds() {
		super();
	}

	public Payable_Ds(AmountOwed e) {
		super(e);
	}

	public Date getDueDate() {
		return this.dueDate;
	}

	public void setDueDate(Date dueDate) {
		this.dueDate = dueDate;
	}

	public Integer getDueInDays() {
		return this.dueInDays;
	}

	public void setDueInDays(Integer dueInDays) {
		this.dueInDays = dueInDays;
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

	public String getVendorId() {
		return this.vendorId;
	}

	public void setVendorId(String vendorId) {
		this.vendorId = vendorId;
	}

	public String getVendor() {
		return this.vendor;
	}

	public void setVendor(String vendor) {
		this.vendor = vendor;
	}

	public String getVendorName() {
		return this.vendorName;
	}

	public void setVendorName(String vendorName) {
		this.vendorName = vendorName;
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

	public String getInvoiceId() {
		return this.invoiceId;
	}

	public void setInvoiceId(String invoiceId) {
		this.invoiceId = invoiceId;
	}

	public String getInvoiceNo() {
		return this.invoiceNo;
	}

	public void setInvoiceNo(String invoiceNo) {
		this.invoiceNo = invoiceNo;
	}

	public Date getInvoiceDate() {
		return this.invoiceDate;
	}

	public void setInvoiceDate(Date invoiceDate) {
		this.invoiceDate = invoiceDate;
	}
}
