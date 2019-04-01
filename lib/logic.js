// import { emit } from "cluster";

/**
 * Buy data transaction
 * @param {org.me.cto.TradeData} trade
 * @transaction
 */

async function tradeData(trade) {
  trade.data.owner = trade.newOwner;
  const assetRegistry = await getAssetRegistry("org.me.cto.Data");

  const dataNotification = getFactory().newEvent(
    "org.me.cto",
    "DataNotification"
  );
  dataNotification.data = trade.data;
  emit(dataNotification);

  await assetRegistry.update(trade.data);
}
