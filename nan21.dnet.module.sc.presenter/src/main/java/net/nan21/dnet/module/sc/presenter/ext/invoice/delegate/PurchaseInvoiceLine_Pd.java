package net.nan21.dnet.module.sc.presenter.ext.invoice.delegate;

import net.nan21.dnet.core.presenter.service.AbstractPresenterDelegate;
import net.nan21.dnet.module.sc.presenter.impl.invoice.model.PurchaseInvoiceLine_Ds;

public class PurchaseInvoiceLine_Pd extends AbstractPresenterDelegate {

	/**
	 * Update line values according to the line product.
	 * 
	 * @param ds
	 * @throws Exception
	 */
	public void onProductChange(PurchaseInvoiceLine_Ds ds) throws Exception {
		// IPurchaseInvoiceService siSrv = (IPurchaseInvoiceService) this
		// .findEntityService(PurchaseInvoice.class);
		// PurchaseInvoice si = siSrv.findById(ds.getInvoiceId());

		// IProductPriceService srv = (IProductPriceService) this
		// .findEntityService(ProductPrice.class);
		// ProductPrice pr = srv.getProductPrice(ds.getProductId(), si
		// .getPriceList().getId(), si.getDocDate());
		//
		// ds.setUnitPrice(pr.getPrice());
		// ds.setUomId(pr.getUom().getId());
		// ds.setUomCode(pr.getUom().getCode());
		//
		// // reset other
		// ds.setNetAmount(1F * pr.getPrice());
		// ds.setTaxAmount(0F);
		// ds.setQuantity(1F);
	}
}
