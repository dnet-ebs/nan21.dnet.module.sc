/**
 * DNet eBusiness Suite
 * Copyright: 2010-2013 Nan21 Electronics SRL. All rights reserved.
 * Use is subject to license terms.
 */
package net.nan21.dnet.module.sc.presenter.impl.order.model;

import java.math.BigDecimal;
import net.nan21.dnet.core.api.annotation.Ds;
import net.nan21.dnet.core.api.annotation.DsField;
import net.nan21.dnet.core.api.annotation.Param;
import net.nan21.dnet.core.api.annotation.RefLookup;
import net.nan21.dnet.core.api.annotation.RefLookups;
import net.nan21.dnet.core.presenter.model.AbstractAuditableDs;
import net.nan21.dnet.module.bd.domain.impl.uom.Uom;
import net.nan21.dnet.module.md.domain.impl.base.Tax;
import net.nan21.dnet.module.md.domain.impl.mm.ProductAccount;
import net.nan21.dnet.module.tx.domain.impl.purchase.PurchaseOrder;
import net.nan21.dnet.module.tx.domain.impl.purchase.PurchaseOrderLine;

@Ds(entity = PurchaseOrderLine.class)
@RefLookups({
		@RefLookup(refId = PurchaseOrderLine_Ds.f_orderId, namedQuery = PurchaseOrder.NQ_FIND_BY_DOCNO, params = {@Param(name = "docNo", field = PurchaseOrderLine_Ds.f_orderDocNo)}),
		@RefLookup(refId = PurchaseOrderLine_Ds.f_productAccountId, namedQuery = ProductAccount.NQ_FIND_BY_PROD_ORG_PRIMITIVE, params = {
				@Param(name = "productId", field = PurchaseOrderLine_Ds.f_productId),
				@Param(name = "companyId", field = PurchaseOrderLine_Ds.f_companyId)}),
		@RefLookup(refId = PurchaseOrderLine_Ds.f_uomId, namedQuery = Uom.NQ_FIND_BY_CODE, params = {@Param(name = "code", field = PurchaseOrderLine_Ds.f_uom)}),
		@RefLookup(refId = PurchaseOrderLine_Ds.f_taxId, namedQuery = Tax.NQ_FIND_BY_NAME, params = {@Param(name = "name", field = PurchaseOrderLine_Ds.f_tax)})})
public class PurchaseOrderLine_Ds
		extends
			AbstractAuditableDs<PurchaseOrderLine> {

	public static final String f_quantity = "quantity";
	public static final String f_unitPrice = "unitPrice";
	public static final String f_netAmount = "netAmount";
	public static final String f_taxAmount = "taxAmount";
	public static final String f_amount = "amount";
	public static final String f_netAmountLoc = "netAmountLoc";
	public static final String f_taxAmountLoc = "taxAmountLoc";
	public static final String f_amountLoc = "amountLoc";
	public static final String f_orderId = "orderId";
	public static final String f_orderDocNo = "orderDocNo";
	public static final String f_companyId = "companyId";
	public static final String f_company = "company";
	public static final String f_productAccountId = "productAccountId";
	public static final String f_productId = "productId";
	public static final String f_product = "product";
	public static final String f_productName = "productName";
	public static final String f_uomId = "uomId";
	public static final String f_uom = "uom";
	public static final String f_taxId = "taxId";
	public static final String f_tax = "tax";

	@DsField
	private BigDecimal quantity;

	@DsField
	private BigDecimal unitPrice;

	@DsField(noInsert = true, noUpdate = true)
	private BigDecimal netAmount;

	@DsField(noInsert = true, noUpdate = true)
	private BigDecimal taxAmount;

	@DsField(noInsert = true, noUpdate = true)
	private BigDecimal amount;

	@DsField(noInsert = true, noUpdate = true)
	private BigDecimal netAmountLoc;

	@DsField(noInsert = true, noUpdate = true)
	private BigDecimal taxAmountLoc;

	@DsField(noInsert = true, noUpdate = true)
	private BigDecimal amountLoc;

	@DsField(join = "left", path = "order.id")
	private String orderId;

	@DsField(join = "left", path = "order.docNo")
	private String orderDocNo;

	@DsField(noInsert = true, noUpdate = true, join = "left", path = "order.company.id")
	private String companyId;

	@DsField(noInsert = true, noUpdate = true, join = "left", path = "order.company.code")
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

	@DsField(join = "left", path = "tax.id")
	private String taxId;

	@DsField(join = "left", path = "tax.name")
	private String tax;

	public PurchaseOrderLine_Ds() {
		super();
	}

	public PurchaseOrderLine_Ds(PurchaseOrderLine e) {
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

	public BigDecimal getNetAmount() {
		return this.netAmount;
	}

	public void setNetAmount(BigDecimal netAmount) {
		this.netAmount = netAmount;
	}

	public BigDecimal getTaxAmount() {
		return this.taxAmount;
	}

	public void setTaxAmount(BigDecimal taxAmount) {
		this.taxAmount = taxAmount;
	}

	public BigDecimal getAmount() {
		return this.amount;
	}

	public void setAmount(BigDecimal amount) {
		this.amount = amount;
	}

	public BigDecimal getNetAmountLoc() {
		return this.netAmountLoc;
	}

	public void setNetAmountLoc(BigDecimal netAmountLoc) {
		this.netAmountLoc = netAmountLoc;
	}

	public BigDecimal getTaxAmountLoc() {
		return this.taxAmountLoc;
	}

	public void setTaxAmountLoc(BigDecimal taxAmountLoc) {
		this.taxAmountLoc = taxAmountLoc;
	}

	public BigDecimal getAmountLoc() {
		return this.amountLoc;
	}

	public void setAmountLoc(BigDecimal amountLoc) {
		this.amountLoc = amountLoc;
	}

	public String getOrderId() {
		return this.orderId;
	}

	public void setOrderId(String orderId) {
		this.orderId = orderId;
	}

	public String getOrderDocNo() {
		return this.orderDocNo;
	}

	public void setOrderDocNo(String orderDocNo) {
		this.orderDocNo = orderDocNo;
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

	public String getTaxId() {
		return this.taxId;
	}

	public void setTaxId(String taxId) {
		this.taxId = taxId;
	}

	public String getTax() {
		return this.tax;
	}

	public void setTax(String tax) {
		this.tax = tax;
	}
}
