/**
 * DNet eBusiness Suite
 * Copyright: 2010-2013 Nan21 Electronics SRL. All rights reserved.
 * Use is subject to license terms.
 */
package net.nan21.dnet.module.sc.presenter.impl.order.model;
import java.util.Date;
import net.nan21.dnet.module.sc.presenter.impl.order.model.PurchaseOrder_Ds;

/**
 * Helper filter object to run query by example with range values.
 *
 */
public class PurchaseOrder_DsFilter extends PurchaseOrder_Ds {

	private Date docDate_From;

	private Date docDate_To;

	public Date getDocDate_From() {
		return this.docDate_From;
	}

	public Date getDocDate_To() {
		return this.docDate_To;
	}

	public void setDocDate_From(Date docDate_From) {
		this.docDate_From = docDate_From;
	}

	public void setDocDate_To(Date docDate_To) {
		this.docDate_To = docDate_To;
	}
}
