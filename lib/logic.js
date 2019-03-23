/**
 * Buy data transaction
 * @param {org.me.cto.TradeData} trade
 * @transaction
 */

async function buydata(trade) {
  if (trade.data.forTrade) {
    trade.data.owner = trade.newOwner;
  }
  return getAssetRegistry("org.me.cto.Data").then(assetRegistry => {
    return assetRegistry.update(trade.data);
  });
}