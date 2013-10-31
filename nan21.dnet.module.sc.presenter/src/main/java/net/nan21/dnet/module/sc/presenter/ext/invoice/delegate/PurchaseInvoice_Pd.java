package net.nan21.dnet.module.sc.presenter.ext.invoice.delegate;

import net.nan21.dnet.core.presenter.service.AbstractPresenterDelegate;

import net.nan21.dnet.module.sc.presenter.impl.invoice.model.PurchaseInvoice_Ds;
import net.nan21.dnet.module.sc.presenter.impl.invoice.model.PurchaseInvoice_DsParam;
import net.nan21.dnet.module.tx.business.api.purchase.IPurchaseInvoiceService;
import net.nan21.dnet.module.tx.domain.impl.purchase.PurchaseInvoice;

public class PurchaseInvoice_Pd extends AbstractPresenterDelegate {

	/**
	 * Confirm document.<BR>
	 * Delegate to the proper business service.
	 * 
	 * @param ds
	 * @throws Exception
	 */
	public void confirm(PurchaseInvoice_Ds ds) throws Exception {
		IPurchaseInvoiceService srv = ((IPurchaseInvoiceService) this
				.findEntityService(PurchaseInvoice.class));
		PurchaseInvoice e = srv.findById(ds.getId());
		srv.doConfirm(e);
	}

	/**
	 * Un-Confirm document.<BR>
	 * Delegate to the proper business service.
	 * 
	 * @param ds
	 * @throws Exception
	 */
	public void unConfirm(PurchaseInvoice_Ds ds) throws Exception {
		IPurchaseInvoiceService srv = ((IPurchaseInvoiceService) this
				.findEntityService(PurchaseInvoice.class));
		PurchaseInvoice e = srv.findById(ds.getId());
		srv.doUnConfirm(e);
	}

	/**
	 * Post document to accounting.<BR>
	 * Delegate to the proper business service.
	 * 
	 * @param ds
	 * @throws Exception
	 */
	public void post(PurchaseInvoice_Ds ds) throws Exception {
		IPurchaseInvoiceService srv = ((IPurchaseInvoiceService) this
				.findEntityService(PurchaseInvoice.class));
		PurchaseInvoice e = srv.findById(ds.getId());
		srv.doPost(e);
	}

	/**
	 * Un-Post document from accounting.<BR>
	 * Delegate to the proper business service.
	 * 
	 * @param ds
	 * @throws Exception
	 */
	public void unPost(PurchaseInvoice_Ds ds) throws Exception {
		IPurchaseInvoiceService srv = ((IPurchaseInvoiceService) this
				.findEntityService(PurchaseInvoice.class));
		PurchaseInvoice e = srv.findById(ds.getId());
		srv.doUnPost(e);
	}

	/**
	 * Copy lines from another document. Delegate to the proper business
	 * service.
	 * 
	 * @param ds
	 * @param params
	 * @throws Exception
	 */
	public void copyLines(PurchaseInvoice_Ds ds, PurchaseInvoice_DsParam params)
			throws Exception {
		IPurchaseInvoiceService srv = ((IPurchaseInvoiceService) this
				.findEntityService(PurchaseInvoice.class));
		PurchaseInvoice e = srv.findById(ds.getId());
		srv.doCopyLines(e, params.getCopyFromId());
	}
}
