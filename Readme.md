# Number Formatter & Parser
這是一個用於數字格式化與解析的 npm package，根據不同的瀏覽器區域設定，以逗號作為數字的分隔符號。
An npm package for number formatting and parsing, formatted with commas based on different browser region settings.

## 安裝 Installation

使用 npm/yarn/pnpm 安裝此 package:

```bash
npm install parse-localized-number
yarn add parse-localized-number
pnpm add parse-localized-number
```

## 使用方法 Usage
### formatNumber
根據瀏覽器的區域設定或給定的預設語言，進行數字格式化並返回字串
Format a number and return it as a string, based on the browser's region settings or a given default language:

```typescript
import { formatNumber } from 'parse-localized-number';

const formattedNumber = formatNumber(1234567);

// 根據您的瀏覽器或預設語言設定，結果可能為 "1,234,567" 等。
// Depending on your browser or default language settings, the result might be "1,234,567".
console.log(formattedNumber); 
```

### createNumberParser
創建一個數字解析器，該解析器可將字串轉換成數字，並根據給定的 locale 格式
Create a number parser that can convert a string into a number, formatted based on a given locale:

```typescript
import { createNumberParser } from 'parse-localized-number';

const parser = createNumberParser('en-US');
const number = parser.parse('1,234.56');
 // 返回 1234.56 
 // Outputs: 1234.56
console.log(number);
```

## 作者 Author
[Andy Lien @andy922200 ](https://github.com/andy922200)
