/**
 * DNet eBusiness Suite
 * Copyright: 2010-2013 Nan21 Electronics SRL. All rights reserved.
 * Use is subject to license terms.
 */
package net.nan21.dnet.module.sc.presenter.impl.financial.model;

import java.util.Date;
import net.nan21.dnet.core.api.annotation.Ds;
import net.nan21.dnet.core.api.annotation.DsField;
import net.nan21.dnet.core.presenter.model.AbstractAuditableLov;
import net.nan21.dnet.module.tx.domain.impl.financial.Payment;

@Ds(entity = Payment.class)
public class PaymentOutLov_Ds extends AbstractAuditableLov<Payment> {

	public static final String f_docNo = "docNo";
	public static final String f_docDate = "docDate";
	public static final String f_companyId = "companyId";
	public static final String f_bpAccountId = "bpAccountId";
	public static final String f_bpartnerId = "bpartnerId";
	public static final String f_bpartner = "bpartner";
	public static final String f_bpartnerName = "bpartnerName";

	@DsField
	private String docNo;

	@DsField
	private Date docDate;

	@DsField(join = "left", path = "company.id")
	private String companyId;

	@DsField(join = "left", path = "bpAccount.id")
	private String bpAccountId;

	@DsField(join = "left", path = "bpAccount.bpartner.id")
	private String bpartnerId;

	@DsField(join = "left", path = "bpAccount.bpartner.code")
	private String bpartner;

	@DsField(join = "left", path = "bpAccount.bpartner.name")
	private String bpartnerName;

	public PaymentOutLov_Ds() {
		super();
	}

	public PaymentOutLov_Ds(Payment e) {
		super(e);
	}

	public String getDocNo() {
		return this.docNo;
	}

	public void setDocNo(String docNo) {
		this.docNo = docNo;
	}

	public Date getDocDate() {
		return this.docDate;
	}

	public void setDocDate(Date docDate) {
		this.docDate = docDate;
	}

	public String getCompanyId() {
		return this.companyId;
	}

	public void setCompanyId(String companyId) {
		this.companyId = companyId;
	}

	public String getBpAccountId() {
		return this.bpAccountId;
	}

	public void setBpAccountId(String bpAccountId) {
		this.bpAccountId = bpAccountId;
	}

	public String getBpartnerId() {
		return this.bpartnerId;
	}

	public void setBpartnerId(String bpartnerId) {
		this.bpartnerId = bpartnerId;
	}

	public String getBpartner() {
		return this.bpartner;
	}

	public void setBpartner(String bpartner) {
		this.bpartner = bpartner;
	}

	public String getBpartnerName() {
		return this.bpartnerName;
	}

	public void setBpartnerName(String bpartnerName) {
		this.bpartnerName = bpartnerName;
	}
}
