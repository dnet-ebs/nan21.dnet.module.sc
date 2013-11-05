/**
 * DNet eBusiness Suite
 * Copyright: 2010-2013 Nan21 Electronics SRL. All rights reserved.
 * Use is subject to license terms.
 */
package net.nan21.dnet.module.sc.presenter.impl.order.model;

public class PurchaseOrder_DsParam {

	public static final String f_copyFromId = "copyFromId";
	public static final String f_copyFrom = "copyFrom";
	public static final String f_filterPeriod = "filterPeriod";
	public static final String f_filterProductAccount = "filterProductAccount";
	public static final String f_filterProductAccountId = "filterProductAccountId";

	private String copyFromId;

	private String copyFrom;

	private String filterPeriod;

	private String filterProductAccount;

	private String filterProductAccountId;

	public String getCopyFromId() {
		return this.copyFromId;
	}

	public void setCopyFromId(String copyFromId) {
		this.copyFromId = copyFromId;
	}

	public String getCopyFrom() {
		return this.copyFrom;
	}

	public void setCopyFrom(String copyFrom) {
		this.copyFrom = copyFrom;
	}

	public String getFilterPeriod() {
		return this.filterPeriod;
	}

	public void setFilterPeriod(String filterPeriod) {
		this.filterPeriod = filterPeriod;
	}

	public String getFilterProductAccount() {
		return this.filterProductAccount;
	}

	public void setFilterProductAccount(String filterProductAccount) {
		this.filterProductAccount = filterProductAccount;
	}

	public String getFilterProductAccountId() {
		return this.filterProductAccountId;
	}

	public void setFilterProductAccountId(String filterProductAccountId) {
		this.filterProductAccountId = filterProductAccountId;
	}
}
