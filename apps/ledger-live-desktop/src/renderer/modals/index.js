// @flow
import MODAL_WEBSOCKET_BRIDGE from "./WebSocketBridge";
import MODAL_DELEGATE from "../families/tezos/DelegateFlowModal";
import MODAL_TRON_REWARDS_INFO from "../families/tron/EarnRewardsInfoModal";
import MODAL_EXPORT_OPERATIONS from "./ExportOperations";
import MODAL_CONFIRM from "./ConfirmModal";
import MODAL_MANAGE_TRON from "./ManageTron";
import MODAL_PASSWORD from "./PasswordModal";
import MODAL_DISABLE_PASSWORD from "./DisablePasswordModal";
import MODAL_ADD_ACCOUNTS from "./AddAccounts";
import MODAL_RECEIVE from "./Receive";
import MODAL_SEND from "./Send";
import MODAL_SIGN_MESSAGE from "./SignMessage";
import MODAL_SIGN_TRANSACTION from "./SignTransaction";
import MODAL_UPDATE_FIRMWARE from "./UpdateFirmwareModal";
import MODAL_MIGRATE_ACCOUNTS from "./MigrateAccounts";
import MODAL_EXPORT_ACCOUNTS from "./ExportAccounts";
import MODAL_TECHNICAL_DATA from "./TechnicalData";
import MODAL_SHARE_ANALYTICS from "./ShareAnalytics";
import MODAL_SETTINGS_ACCOUNT from "./SettingsAccount";
import MODAL_RELEASE_NOTES from "./ReleaseNotes";
import MODAL_TROUBLESHOOT_NETWORK from "./TroubleshootNetwork";
import MODAL_SYSTEM_LANGUAGE_AVAILABLE from "./SystemLanguageAvailable";
// $FlowFixMe
import MODAL_TERM_OF_USE_UPDATE from "./TermOfUseUpdate";
import MODAL_EXCHANGE_CRYPTO_DEVICE from "./ExchangeDeviceConfirm";
import MODAL_SELL_CRYPTO_DEVICE from "./SellDeviceConfirm";
import MODAL_SWAP_RESET_KYC from "./Swap/ResetKYC";
import MODAL_WALLETCONNECT_PASTE_LINK from "./WalletConnectPasteLink";
import MODAL_WALLETCONNECT_DEEPLINK from "./WalletConnectDeeplink";
import MODAL_PLATFORM_EXCHANGE_START from "./Platform/Exchange/StartExchange";
import MODAL_PLATFORM_EXCHANGE_COMPLETE from "./Platform/Exchange/CompleteExchange";
import MODAL_CONNECT_DEVICE from "./ConnectDevice";

import MODAL_FULL_NODE from "./FullNode";
import MODAL_LOTTIE_DEBUGGER from "./LottieDebugger";
import MODAL_STORYLY_DEBUGGER from "./StorylyDebugger";
import MODAL_RECOVERY_SEED_WARNING from "./RecoverySeedWarning";

import MODAL_CLAIM_REWARDS from "./ClaimRewards";
import MODAL_FREEZE from "./Freeze";
import MODAL_UNFREEZE from "./Unfreeze";
import MODAL_VOTE_TRON from "./VoteTron";
import MODAL_VOTE_TRON_INFO from "./VoteTron/Info";
import MODAL_BLACKLIST_TOKEN from "./BlacklistToken";
import MODAL_HIDE_NFT_COLLECTION from "./HideNftCollection";

import MODAL_COSMOS_DELEGATE from "../families/cosmos/DelegationFlowModal";
import MODAL_COSMOS_REWARDS_INFO from "../families/cosmos/DelegationFlowModal/Info";
import MODAL_COSMOS_CLAIM_REWARDS from "../families/cosmos/ClaimRewardsFlowModal";
import MODAL_COSMOS_REDELEGATE from "../families/cosmos/RedelegationFlowModal";
import MODAL_COSMOS_UNDELEGATE from "../families/cosmos/UndelegationFlowModal";

import MODAL_ETH_STAKE from "../families/ethereum/StakeFlowModal";

import MODAL_ALGORAND_OPT_IN from "../families/algorand/OptInFlowModal";
import MODAL_ALGORAND_CLAIM_REWARDS from "../families/algorand/Rewards/ClaimRewardsFlowModal";
import MODAL_ALGORAND_EARN_REWARDS_INFO from "../families/algorand/Rewards/EarnRewardsInfoModal";

import MODAL_OSMOSIS_DELEGATE from "../families/osmosis/DelegationFlowModal";
import MODAL_OSMOSIS_REWARDS_INFO from "../families/osmosis/DelegationFlowModal/Info";
// import MODAL_COSMOS_CLAIM_REWARDS from "../families/cosmos/ClaimRewardsFlowModal";
import MODAL_OSMOSIS_REDELEGATE from "../families/osmosis/RedelegationFlowModal";
// import MODAL_COSMOS_UNDELEGATE from "../families/cosmos/UndelegationFlowModal";

import MODAL_POLKADOT_MANAGE from "../families/polkadot/ManageModal";
import MODAL_POLKADOT_REWARDS_INFO from "../families/polkadot/EarnRewardsInfoModal";
import MODAL_POLKADOT_SIMPLE_OPERATION from "../families/polkadot/SimpleOperationFlowModal";
import MODAL_POLKADOT_NOMINATE from "../families/polkadot/NominationFlowModal";
import MODAL_POLKADOT_BOND from "../families/polkadot/BondFlowModal";
import MODAL_POLKADOT_UNBOND from "../families/polkadot/UnbondFlowModal";
import MODAL_POLKADOT_REBOND from "../families/polkadot/RebondFlowModal";

import MODAL_STELLAR_ADD_ASSET from "../families/stellar/AddAssetModal";

import MODAL_SOLANA_REWARDS_INFO from "../families/solana/DelegationFlowModal/Info";
import MODAL_SOLANA_DELEGATE from "../families/solana/DelegationFlowModal";
import MODAL_SOLANA_DELEGATION_ACTIVATE from "../families/solana/DelegationActivateFlowModal";
import MODAL_SOLANA_DELEGATION_DEACTIVATE from "../families/solana/DelegationDeactivateFlowModal";
import MODAL_SOLANA_DELEGATION_REACTIVATE from "../families/solana/DelegationReactivateFlowModal";
import MODAL_SOLANA_DELEGATION_WITHDRAW from "../families/solana/DelegationWithdrawFlowModal";

import MODAL_CELO_REWARDS_INFO from "../families/celo/EarnRewardsInfoModal/EarnRewardsInfoModal";
import MODAL_CELO_MANAGE from "../families/celo/ManageModal/ManageModal";
import MODAL_CELO_LOCK from "../families/celo/LockFlowModal";
import MODAL_CELO_UNLOCK from "../families/celo/UnlockFlowModal";
import MODAL_CELO_VOTE from "../families/celo/VoteFlowModal";
import MODAL_CELO_SIMPLE_OPERATION from "../families/celo/SimpleOperationFlowModal/SimpleOperationFlowModal";
import MODAL_CELO_WITHDRAW from "../families/celo/WithdrawFlowModal";
import MODAL_CELO_ACTIVATE from "../families/celo/ActivateFlowModal";
import MODAL_CELO_REVOKE from "../families/celo/RevokeFlowModal";

import MODAL_NEAR_STAKE from "../families/near/StakingFlowModal";
import MODAL_NEAR_REWARDS_INFO from "../families/near/StakingFlowModal/Info";
import MODAL_NEAR_UNSTAKE from "../families/near/UnstakingFlowModal";
import MODAL_NEAR_WITHDRAW from "../families/near/WithdrawingFlowModal";

// Lending
import MODAL_LEND_MANAGE from "../screens/lend/modals/ManageLend";
import MODAL_LEND_ENABLE_INFO from "../screens/lend/modals/EnableInfoModal";
import MODAL_LEND_SUPPLY from "../screens/lend/modals/Supply";
import MODAL_LEND_SELECT_ACCOUNT from "../screens/lend/modals/SelectAccountStep";
import MODAL_LEND_ENABLE_FLOW from "../screens/lend/modals/Enable";
import MODAL_LEND_WITHDRAW_FLOW from "../screens/lend/modals/Withdraw";
import MODAL_LEND_NO_ETHEREUM_ACCOUNT from "../screens/lend/modals/NoEthereumAccount";
import MODAL_LEND_EMPTY_ACCOUNT_DEPOSIT from "../screens/lend/modals/EmptyAccountDeposit";

const modals: { [_: string]: React$ComponentType<any> } = {
  MODAL_WEBSOCKET_BRIDGE,
  MODAL_EXPORT_OPERATIONS,
  MODAL_CONFIRM,
  MODAL_MANAGE_TRON,
  MODAL_PASSWORD,
  MODAL_DISABLE_PASSWORD,
  MODAL_ADD_ACCOUNTS,
  MODAL_RECEIVE,
  MODAL_WALLETCONNECT_PASTE_LINK,
  MODAL_WALLETCONNECT_DEEPLINK,
  MODAL_SEND,
  MODAL_SIGN_MESSAGE,
  MODAL_SIGN_TRANSACTION,
  MODAL_UPDATE_FIRMWARE,
  MODAL_DELEGATE,
  MODAL_MIGRATE_ACCOUNTS,
  MODAL_EXPORT_ACCOUNTS,
  MODAL_TECHNICAL_DATA,
  MODAL_SHARE_ANALYTICS,
  MODAL_SETTINGS_ACCOUNT,
  MODAL_RELEASE_NOTES,
  MODAL_TROUBLESHOOT_NETWORK,
  MODAL_SYSTEM_LANGUAGE_AVAILABLE,
  MODAL_TERM_OF_USE_UPDATE,
  MODAL_CLAIM_REWARDS,
  MODAL_FREEZE,
  MODAL_UNFREEZE,
  MODAL_TRON_REWARDS_INFO,
  MODAL_VOTE_TRON,
  MODAL_VOTE_TRON_INFO,
  MODAL_BLACKLIST_TOKEN,
  MODAL_HIDE_NFT_COLLECTION,
  MODAL_COSMOS_DELEGATE,
  MODAL_COSMOS_REWARDS_INFO,
  MODAL_COSMOS_CLAIM_REWARDS,
  MODAL_COSMOS_REDELEGATE,
  MODAL_COSMOS_UNDELEGATE,
  MODAL_ETH_STAKE,
  MODAL_EXCHANGE_CRYPTO_DEVICE,
  MODAL_SELL_CRYPTO_DEVICE,
  MODAL_ALGORAND_OPT_IN,
  MODAL_ALGORAND_CLAIM_REWARDS,
  MODAL_ALGORAND_EARN_REWARDS_INFO,
  MODAL_POLKADOT_MANAGE,
  MODAL_POLKADOT_REWARDS_INFO,
  MODAL_OSMOSIS_DELEGATE,
  MODAL_OSMOSIS_REWARDS_INFO,
  MODAL_OSMOSIS_REDELEGATE,
  MODAL_POLKADOT_SIMPLE_OPERATION,
  MODAL_POLKADOT_NOMINATE,
  MODAL_POLKADOT_BOND,
  MODAL_POLKADOT_UNBOND,
  MODAL_POLKADOT_REBOND,
  MODAL_STELLAR_ADD_ASSET,
  MODAL_SOLANA_REWARDS_INFO,
  MODAL_SOLANA_DELEGATE,
  MODAL_SOLANA_DELEGATION_ACTIVATE,
  MODAL_SOLANA_DELEGATION_DEACTIVATE,
  MODAL_SOLANA_DELEGATION_REACTIVATE,
  MODAL_SOLANA_DELEGATION_WITHDRAW,
  MODAL_CELO_REWARDS_INFO,
  MODAL_CELO_MANAGE,
  MODAL_CELO_LOCK,
  MODAL_CELO_UNLOCK,
  MODAL_CELO_VOTE,
  MODAL_CELO_SIMPLE_OPERATION,
  MODAL_CELO_WITHDRAW,
  MODAL_CELO_ACTIVATE,
  MODAL_CELO_REVOKE,
  MODAL_NEAR_STAKE,
  MODAL_NEAR_REWARDS_INFO,
  MODAL_NEAR_UNSTAKE,
  MODAL_NEAR_WITHDRAW,
  MODAL_FULL_NODE,
  MODAL_LOTTIE_DEBUGGER,
  MODAL_STORYLY_DEBUGGER,
  MODAL_RECOVERY_SEED_WARNING,
  // Lending
  MODAL_LEND_MANAGE,
  MODAL_LEND_ENABLE_INFO,
  MODAL_LEND_ENABLE_FLOW,
  MODAL_LEND_SELECT_ACCOUNT,
  MODAL_LEND_SUPPLY,
  MODAL_LEND_WITHDRAW_FLOW,
  MODAL_LEND_NO_ETHEREUM_ACCOUNT,
  MODAL_LEND_EMPTY_ACCOUNT_DEPOSIT,
  // Swap
  MODAL_SWAP_RESET_KYC,
  // Platform
  MODAL_PLATFORM_EXCHANGE_START,
  MODAL_PLATFORM_EXCHANGE_COMPLETE,
  MODAL_CONNECT_DEVICE,

  // NB We have dettached modals such as the repair modal,
  // in the meantime, we can rely on this to add the backdrop
  MODAL_STUB: () => null,
};

export default modals;
