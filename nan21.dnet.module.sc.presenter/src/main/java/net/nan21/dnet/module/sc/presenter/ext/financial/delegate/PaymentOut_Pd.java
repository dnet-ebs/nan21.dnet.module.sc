package net.nan21.dnet.module.sc.presenter.ext.financial.delegate;

import net.nan21.dnet.core.presenter.service.AbstractPresenterDelegate;

import net.nan21.dnet.module.sc.presenter.impl.financial.model.PaymentOut_Ds;
import net.nan21.dnet.module.tx.business.api.financial.IPaymentService;
import net.nan21.dnet.module.tx.domain.impl.financial.Payment;

public class PaymentOut_Pd extends AbstractPresenterDelegate {

	/**
	 * Confirm document.<BR>
	 * Delegate to the proper business service.
	 * 
	 * @param ds
	 * @throws Exception
	 */
	public void confirm(PaymentOut_Ds ds) throws Exception {
		IPaymentService srv = ((IPaymentService) this
				.findEntityService(Payment.class));
		Payment e = srv.findById(ds.getId());
		srv.doConfirm(e);
	}

	/**
	 * Un-Confirm document.<BR>
	 * Delegate to the proper business service.
	 * 
	 * @param ds
	 * @throws Exception
	 */
	public void unConfirm(PaymentOut_Ds ds) throws Exception {
		IPaymentService srv = ((IPaymentService) this
				.findEntityService(Payment.class));
		Payment e = srv.findById(ds.getId());
		srv.doUnConfirm(e);
	}

	/**
	 * Post document to accounting.<BR>
	 * Delegate to the proper business service.
	 * 
	 * @param ds
	 * @throws Exception
	 */
	public void post(PaymentOut_Ds ds) throws Exception {
		IPaymentService srv = ((IPaymentService) this
				.findEntityService(Payment.class));
		Payment e = srv.findById(ds.getId());
		srv.doPost(e);
	}

	/**
	 * Un-Post document from accounting.<BR>
	 * Delegate to the proper business service.
	 * 
	 * @param ds
	 * @throws Exception
	 */
	public void unPost(PaymentOut_Ds ds) throws Exception {
		IPaymentService srv = ((IPaymentService) this
				.findEntityService(Payment.class));
		Payment e = srv.findById(ds.getId());
		srv.doUnPost(e);
	}
}
