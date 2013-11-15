/**
 * DNet eBusiness Suite
 * Copyright: 2010-2013 Nan21 Electronics SRL. All rights reserved.
 * Use is subject to license terms.
 */
package net.nan21.dnet.module.sc.presenter.impl.financial.model;

public class Payable_DsParam {

	public static final String f_duePeriod = "duePeriod";
	public static final String f_docPeriod = "docPeriod";

	private String duePeriod;

	private String docPeriod;

	public String getDuePeriod() {
		return this.duePeriod;
	}

	public void setDuePeriod(String duePeriod) {
		this.duePeriod = duePeriod;
	}

	public String getDocPeriod() {
		return this.docPeriod;
	}

	public void setDocPeriod(String docPeriod) {
		this.docPeriod = docPeriod;
	}
}
