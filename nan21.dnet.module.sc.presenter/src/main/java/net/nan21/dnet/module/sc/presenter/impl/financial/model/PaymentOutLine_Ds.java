/**
 * DNet eBusiness Suite
 * Copyright: 2010-2013 Nan21 Electronics SRL. All rights reserved.
 * Use is subject to license terms.
 */
package net.nan21.dnet.module.sc.presenter.impl.financial.model;

import java.math.BigDecimal;
import net.nan21.dnet.core.api.annotation.Ds;
import net.nan21.dnet.core.api.annotation.DsField;
import net.nan21.dnet.core.api.annotation.Param;
import net.nan21.dnet.core.api.annotation.RefLookup;
import net.nan21.dnet.core.api.annotation.RefLookups;
import net.nan21.dnet.core.presenter.model.AbstractAuditableDs;
import net.nan21.dnet.module.bd.domain.impl.uom.Uom;
import net.nan21.dnet.module.md.domain.impl.mm.ProductAccount;
import net.nan21.dnet.module.tx.domain.impl.financial.Payment;
import net.nan21.dnet.module.tx.domain.impl.financial.PaymentLine;

@Ds(entity = PaymentLine.class)
@RefLookups({
		@RefLookup(refId = PaymentOutLine_Ds.f_paymentId, namedQuery = Payment.NQ_FIND_BY_DOCNO, params = {@Param(name = "docNo", field = PaymentOutLine_Ds.f_paymentDocNo)}),
		@RefLookup(refId = PaymentOutLine_Ds.f_productAccountId, namedQuery = ProductAccount.NQ_FIND_BY_PROD_ORG_PRIMITIVE, params = {
				@Param(name = "productId", field = PaymentOutLine_Ds.f_productId),
				@Param(name = "companyId", field = PaymentOutLine_Ds.f_companyId)}),
		@RefLookup(refId = PaymentOutLine_Ds.f_uomId, namedQuery = Uom.NQ_FIND_BY_CODE, params = {@Param(name = "code", field = PaymentOutLine_Ds.f_uom)})})
public class PaymentOutLine_Ds extends AbstractAuditableDs<PaymentLine> {

	public static final String f_quantity = "quantity";
	public static final String f_unitPrice = "unitPrice";
	public static final String f_amount = "amount";
	public static final String f_paymentId = "paymentId";
	public static final String f_paymentDocNo = "paymentDocNo";
	public static final String f_companyId = "companyId";
	public static final String f_company = "company";
	public static final String f_productAccountId = "productAccountId";
	public static final String f_productId = "productId";
	public static final String f_product = "product";
	public static final String f_productName = "productName";
	public static final String f_uomId = "uomId";
	public static final String f_uom = "uom";

	@DsField
	private BigDecimal quantity;

	@DsField
	private BigDecimal unitPrice;

	@DsField(noInsert = true, noUpdate = true)
	private BigDecimal amount;

	@DsField(join = "left", path = "payment.id")
	private String paymentId;

	@DsField(join = "left", path = "payment.docNo")
	private String paymentDocNo;

	@DsField(noInsert = true, noUpdate = true, join = "left", path = "payment.company.id")
	private String companyId;

	@DsField(noInsert = true, noUpdate = true, join = "left", path = "payment.company.code")
	private String company;

	@DsField(join = "left", path = "productAccount.id")
	private String productAccountId;

	@DsField(join = "left", path = "productAccount.product.id")
	private String productId;

	@DsField(join = "left", path = "productAccount.product.code")
	private String product;

	@DsField(join = "left", path = "productAccount.product.name")
	private String productName;

	@DsField(join = "left", path = "uom.id")
	private String uomId;

	@DsField(join = "left", path = "uom.code")
	private String uom;

	public PaymentOutLine_Ds() {
		super();
	}

	public PaymentOutLine_Ds(PaymentLine e) {
		super(e);
	}

	public BigDecimal getQuantity() {
		return this.quantity;
	}

	public void setQuantity(BigDecimal quantity) {
		this.quantity = quantity;
	}

	public BigDecimal getUnitPrice() {
		return this.unitPrice;
	}

	public void setUnitPrice(BigDecimal unitPrice) {
		this.unitPrice = unitPrice;
	}

	public BigDecimal getAmount() {
		return this.amount;
	}

	public void setAmount(BigDecimal amount) {
		this.amount = amount;
	}

	public String getPaymentId() {
		return this.paymentId;
	}

	public void setPaymentId(String paymentId) {
		this.paymentId = paymentId;
	}

	public String getPaymentDocNo() {
		return this.paymentDocNo;
	}

	public void setPaymentDocNo(String paymentDocNo) {
		this.paymentDocNo = paymentDocNo;
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

	public String getProductAccountId() {
		return this.productAccountId;
	}

	public void setProductAccountId(String productAccountId) {
		this.productAccountId = productAccountId;
	}

	public String getProductId() {
		return this.productId;
	}

	public void setProductId(String productId) {
		this.productId = productId;
	}

	public String getProduct() {
		return this.product;
	}

	public void setProduct(String product) {
		this.product = product;
	}

	public String getProductName() {
		return this.productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getUomId() {
		return this.uomId;
	}

	public void setUomId(String uomId) {
		this.uomId = uomId;
	}

	public String getUom() {
		return this.uom;
	}

	public void setUom(String uom) {
		this.uom = uom;
	}
}
