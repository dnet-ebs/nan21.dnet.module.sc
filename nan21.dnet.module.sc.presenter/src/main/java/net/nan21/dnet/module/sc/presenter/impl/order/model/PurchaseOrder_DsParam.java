/**
 * DNet eBusiness Suite
 * Copyright: 2010-2013 Nan21 Electronics SRL. All rights reserved.
 * Use is subject to license terms.
 */
package net.nan21.dnet.module.sc.presenter.impl.order.model;

public class PurchaseOrder_DsParam {

	public static final String f_copyFromId = "copyFromId";
	public static final String f_copyFrom = "copyFrom";

	private String copyFromId;

	private String copyFrom;

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
}
