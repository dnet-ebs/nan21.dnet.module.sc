package net.nan21.dnet.module.sc.presenter.ext.order.delegate;

import net.nan21.dnet.core.presenter.service.AbstractPresenterDelegate;
import net.nan21.dnet.module.sc.presenter.impl.order.model.PurchaseOrder_Ds;
import net.nan21.dnet.module.sc.presenter.impl.order.model.PurchaseOrder_DsParam;
import net.nan21.dnet.module.tx.business.api.purchase.IPurchaseOrderService;
import net.nan21.dnet.module.tx.domain.impl.purchase.PurchaseOrder;

public class PurchaseOrder_Pd extends AbstractPresenterDelegate {

	/**
	 * Confirm document.<BR>
	 * Delegate to the proper business service.
	 * 
	 * @param ds
	 * @throws Exception
	 */
	public void confirm(PurchaseOrder_Ds ds) throws Exception {
		IPurchaseOrderService srv = ((IPurchaseOrderService) this
				.findEntityService(PurchaseOrder.class));
		PurchaseOrder e = srv.findById(ds.getId());
		srv.doConfirm(e);
	}

	/**
	 * Un-Confirm document.<BR>
	 * Delegate to the proper business service.
	 * 
	 * @param ds
	 * @throws Exception
	 */
	public void unConfirm(PurchaseOrder_Ds ds) throws Exception {
		IPurchaseOrderService srv = ((IPurchaseOrderService) this
				.findEntityService(PurchaseOrder.class));
		PurchaseOrder e = srv.findById(ds.getId());
		srv.doUnConfirm(e);
	}

	/**
	 * Copy lines from another document. Delegate to the proper business
	 * service.
	 * 
	 * @param ds
	 * @param params
	 * @throws Exception
	 */
	public void copyLines(PurchaseOrder_Ds ds, PurchaseOrder_DsParam params)
			throws Exception {
		IPurchaseOrderService srv = ((IPurchaseOrderService) this
				.findEntityService(PurchaseOrder.class));
		PurchaseOrder e = srv.findById(ds.getId());
		srv.doCopyLines(e, params.getCopyFromId());
	}
}
