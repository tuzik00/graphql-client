import { NextDataType } from '@/types/next';

interface Window {
  __NEXT_DATA__: NextDataType;
}

declare const window: Window;
