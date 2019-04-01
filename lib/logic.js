// import { emit } from "cluster";

/**
 * Buy data transaction
 * @param {org.me.cto.TradeData} trade
 * @transaction
 */

async function tradeData(trade) {
  trade.data.owner = trade.newOwner;
  const assetRegistry = await getAssetRegistry("org.me.cto");

  const tradeNotification = getFactory().newEvent(
    "org.me.cto",
    "DataNotification"
  );
  tradeNotification.data = trade.data;
  emit(tradeNotification);

  await assetRegistry.update(trade.data);
}
