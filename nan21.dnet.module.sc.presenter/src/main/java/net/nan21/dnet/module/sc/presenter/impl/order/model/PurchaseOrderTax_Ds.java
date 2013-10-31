/**
 * DNet eBusiness Suite
 * Copyright: 2010-2013 Nan21 Electronics SRL. All rights reserved.
 * Use is subject to license terms.
 */
package net.nan21.dnet.module.sc.presenter.impl.order.model;

import java.math.BigDecimal;
import net.nan21.dnet.core.api.annotation.Ds;
import net.nan21.dnet.core.api.annotation.DsField;
import net.nan21.dnet.core.presenter.model.AbstractAuditableDs;
import net.nan21.dnet.module.tx.domain.impl.purchase.PurchaseOrderTax;

@Ds(entity = PurchaseOrderTax.class)
public class PurchaseOrderTax_Ds extends AbstractAuditableDs<PurchaseOrderTax> {

	public static final String f_baseAmount = "baseAmount";
	public static final String f_taxAmount = "taxAmount";
	public static final String f_baseAmountLoc = "baseAmountLoc";
	public static final String f_taxAmountLoc = "taxAmountLoc";
	public static final String f_orderId = "orderId";
	public static final String f_orderDocNo = "orderDocNo";
	public static final String f_taxId = "taxId";
	public static final String f_tax = "tax";

	@DsField
	private BigDecimal baseAmount;

	@DsField
	private BigDecimal taxAmount;

	@DsField
	private BigDecimal baseAmountLoc;

	@DsField
	private BigDecimal taxAmountLoc;

	@DsField(join = "left", path = "order.id")
	private String orderId;

	@DsField(join = "left", path = "order.docNo")
	private String orderDocNo;

	@DsField(join = "left", path = "tax.id")
	private String taxId;

	@DsField(join = "left", path = "tax.name")
	private String tax;

	public PurchaseOrderTax_Ds() {
		super();
	}

	public PurchaseOrderTax_Ds(PurchaseOrderTax e) {
		super(e);
	}

	public BigDecimal getBaseAmount() {
		return this.baseAmount;
	}

	public void setBaseAmount(BigDecimal baseAmount) {
		this.baseAmount = baseAmount;
	}

	public BigDecimal getTaxAmount() {
		return this.taxAmount;
	}

	public void setTaxAmount(BigDecimal taxAmount) {
		this.taxAmount = taxAmount;
	}

	public BigDecimal getBaseAmountLoc() {
		return this.baseAmountLoc;
	}

	public void setBaseAmountLoc(BigDecimal baseAmountLoc) {
		this.baseAmountLoc = baseAmountLoc;
	}

	public BigDecimal getTaxAmountLoc() {
		return this.taxAmountLoc;
	}

	public void setTaxAmountLoc(BigDecimal taxAmountLoc) {
		this.taxAmountLoc = taxAmountLoc;
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
