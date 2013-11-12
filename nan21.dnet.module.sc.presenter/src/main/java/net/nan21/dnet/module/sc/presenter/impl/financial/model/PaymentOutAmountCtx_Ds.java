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
import net.nan21.dnet.core.api.annotation.RefLookup;
import net.nan21.dnet.core.api.annotation.RefLookups;
import net.nan21.dnet.core.presenter.model.AbstractAuditableDs;
import net.nan21.dnet.module.tx.domain.impl.financial.PaymentAmount;

@Ds(entity = PaymentAmount.class)
@RefLookups({@RefLookup(refId = PaymentOutAmountCtx_Ds.f_paymentId)})
public class PaymentOutAmountCtx_Ds extends AbstractAuditableDs<PaymentAmount> {

	public static final String f_paymentId = "paymentId";
	public static final String f_amountId = "amountId";
	public static final String f_amountInitial = "amountInitial";
	public static final String f_amountPayed = "amountPayed";
	public static final String f_amountDue = "amountDue";
	public static final String f_currentPayment = "currentPayment";
	public static final String f_invoiceId = "invoiceId";
	public static final String f_invoice = "invoice";
	public static final String f_invoiceDocDate = "invoiceDocDate";

	@DsField(join = "left", path = "payment.id")
	private String paymentId;

	@DsField(join = "left", path = "amountOwed.id")
	private String amountId;

	@DsField(join = "left", path = "amountOwed.amountInitial")
	private BigDecimal amountInitial;

	@DsField(join = "left", path = "amountOwed.amountPayed")
	private BigDecimal amountPayed;

	@DsField(join = "left", path = "amountOwed.amountDue")
	private BigDecimal amountDue;

	@DsField(path = "amount")
	private BigDecimal currentPayment;

	@DsField(join = "left", path = "amountOwed.purchaseInvoice.id")
	private String invoiceId;

	@DsField(join = "left", path = "amountOwed.purchaseInvoice.docNo")
	private String invoice;

	@DsField(join = "left", path = "amountOwed.purchaseInvoice.docDate")
	private Date invoiceDocDate;

	public PaymentOutAmountCtx_Ds() {
		super();
	}

	public PaymentOutAmountCtx_Ds(PaymentAmount e) {
		super(e);
	}

	public String getPaymentId() {
		return this.paymentId;
	}

	public void setPaymentId(String paymentId) {
		this.paymentId = paymentId;
	}

	public String getAmountId() {
		return this.amountId;
	}

	public void setAmountId(String amountId) {
		this.amountId = amountId;
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

	public String getInvoiceId() {
		return this.invoiceId;
	}

	public void setInvoiceId(String invoiceId) {
		this.invoiceId = invoiceId;
	}

	public String getInvoice() {
		return this.invoice;
	}

	public void setInvoice(String invoice) {
		this.invoice = invoice;
	}

	public Date getInvoiceDocDate() {
		return this.invoiceDocDate;
	}

	public void setInvoiceDocDate(Date invoiceDocDate) {
		this.invoiceDocDate = invoiceDocDate;
	}
}
