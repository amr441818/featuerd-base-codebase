interface Program {
  id: number;
  name: string;
}

interface Wallet {
  id: number;
  name: string;
  programs: Program[];
}

interface DangerType {
  id: number;
  name: string;
}

interface DangerStatus {
  id: number;
  name: string;
}

export interface ApiDataResponse {
  wallets: Wallet[];
  danger_types: DangerType[];
  danger_status: DangerStatus[];
}
