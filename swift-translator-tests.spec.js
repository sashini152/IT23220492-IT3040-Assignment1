const { test, expect } = require('@playwright/test');

// Configuration
const CONFIG = {
  url: 'https://www.swifttranslator.com/',
  timeouts: {
    pageLoad: 2000,
    afterClear: 1000,
    translation: 3000,
    betweenTests: 2000
  },
  selectors: {
    inputField: 'Input Your Singlish Text Here.',
    outputContainer: 'div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap'
  }
};

const TEST_DATA = {
  positive: [
    {
      tcId: 'Pos_Fun_0001',
      name: 'Convert multi-line input',
      input: 'mama gedhara yanavaa.oyaa enavadha maath ekka yanna?',
      expected: 'මම ගෙදර යනවා.ඔයා එනවද මාත් එක්ක යන්න?',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0002',
      name: 'Convert simple sentence',
      input: 'mata bath oonee.',
      expected: 'මට බත් ඕනේ.',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0003',
      name: 'Convert simple sentence',
      input: 'api paasal yanavaa',
      expected: 'අපි පාසල් යනවා',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
    
    {
      tcId: 'Pos_Fun_0004',
      name: 'Convert compound sentence ',
      input: 'mama gedhara yanavaa, haebaeyi vahina nisaa dhaenma yannee naee.',
      expected: 'මම ගෙදර යනවා, හැබැයි වහින නිසා දැන්ම යන්නේ නෑ.',
      category: 'Daily language usage',
      grammar: 'Compound sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0005',
      name: 'Convert compound sentence',
      input: 'api kaeema kanna yanavaa saha passe chithrapatayakuth balanavaa.',
      expected: 'අපි කෑම කන්න යනවා සහ පස්සෙ චිත්‍රපටයකුත් බලනවා.',
      category: 'Daily language usage',
      grammar: 'Compound sentence',
      length: 'S'
    },
    
    {
      tcId: 'Pos_Fun_0006',
      name: 'Convert complex sentence - conditional',
      input: 'oya enavaanam mama balan innavaa.',
      expected: 'ඔය එනවානම් මම බලන් ඉන්නවා.',
      category: 'Daily language usage',
      grammar: 'Complex sentence',
      length: 'M'
    },
    
    {
      tcId: 'Pos_Fun_0007',
      name: 'Convert complex sentence - condition with negation',
      input: 'vaessa unath api yanna epaeyi.',
      expected: 'වැස්ස උනත් අපි යන්න එපැයි.',
      category: 'Daily language usage',
      grammar: 'Compound sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0008',
      name: 'Convert interrogative',
      input: 'oyaata kohomadha?',
      expected: 'ඔයාට කොහොමද?',
      category: 'Greeting / request / response',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0009',
      name: 'Convert medium length mixed language input',
      input: 'machan mata adha meeting ekee Zoom link eka email ekak vidhihata evanna puLuvandha? Please send it before 3pm. Mama office yanna kalin check karanna oonea.',
      expected: 'මචන් මට අද meeting එකේ Zoom link එක email එකක් විදිහට එවන්න පුළුවන්ද? Please send it before 3pm. මම office යන්න කලින් check කරන්න ඕනේ.',
      category: 'Mixed Singlish + English',
      grammar: 'Compound sentence',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_0010',
      name: 'Convert long paragraph input',
      input: 'dhitvaa suLi kuNaatuva samaGa aethi vuu gQQvathura saha naayayaeem heethuven maarga sQQvarDhana aDhikaariya sathu maarga kotas 430k vinaashayata pathva aethi athara, ehi samastha dhiga pramaaNaya kiloomiitar 300k pamaNa vana bava pravaahana,mahaamaarga saha naagarika sQQvarDhana amaathYA bimal rathnaayaka saDHahan kaLeeya.',
      expected: 'දිට්වා සුළි කුණාටුව සමඟ ඇති වූ ගංවතුර සහ නායයෑම් හේතුවෙන් මාර්ග සංවර්ධන අධිකාරිය සතු මාර්ග කොටස් 430ක් විනාශයට පත්ව ඇති අතර, එහි සමස්ත දිග ප්‍රමාණය කිලෝමීටර් 300ක් පමණ වන බව ප්‍රවාහන,මහාමාර්ග සහ නාගරික සංවර්ධන අමාත්‍ය බිමල් රත්නායක සඳහන් කළේය.',
      category: ' Formatting (spaces / line breaks / paragraph)',
      grammar: 'Compound sentence',
      length: 'L'
    },
    {
      tcId: 'Pos_Fun_0011',
      name: ' Convert imperative',
      input: 'issarahata yanna.',
      expected: 'ඉස්සරහට යන්න.',
      category: 'Daily language usage',
      grammar: 'Imperative (command)',
      length: 'S'
    },
    
    {
      tcId: 'Pos_Fun_0012',
      name: 'Convert positive sentence',
      input: 'mama ehema karanavaa.',
      expected: 'මම එහෙම කරනවා.',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0013',
      name: 'Convert negative sentence',
      input: 'mama ehema karannee naehae.',
      expected: 'මම එහෙම කරන්නේ නැහැ.',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
    {
      tcId: 'Pos_Fun_0014',
      name: 'Convert greeting',
      input: 'aayuboovan!',
      expected: 'ආයුබෝවන්!',
      category: ' Greeting / request / response',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0015',
      name: 'Convert greeting',
      input: 'suba udhaeesanak!',
      expected: 'සුබ උදෑසනක්!',
      category: ' Greeting / request / response',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
    {
      tcId: 'Pos_Fun_0016',
      name: 'Convert polite request',
      input: 'mata udhavvak karanna puLuvandha?',
      expected: 'මට උදව්වක් කරන්න පුළුවන්ද?',
      category: ' Greeting / request / response',
      grammar: 'Question sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0017',
      name: 'Convert polite phrasing',
      input: 'karuNaakaralaa mata podi udhavvak karanna puLuvandha?',
      expected: 'කරුණාකරලා මට පොඩි උදව්වක් කරන්න පුළුවන්ද?',
      category: ' Greeting / request / response',
      grammar: 'Question sentence',
      length: 'M'
    },
    
    {
      tcId: 'Pos_Fun_0018',
      name: 'Convert daily expression',
      input: 'eeyi, ooka dhiyan.',
      expected: 'ඒයි, ඕක දියන්.',
      category: ' Slang / informal language',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
    {
      tcId: 'Pos_Fun_0019',
      name: 'Common phrase pattern',
      input: 'mata nidhimathayi.',
      expected: 'මට නිදිමතයි.',
      category: ' Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
    {
      tcId: 'Pos_Fun_0020',
      name: 'Convert multi-word expression',
      input: 'mata oona.',
      expected: 'මට ඕන.',
      category: 'Word combination / phrase pattern',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0021',
      name: 'Convert past tense',
      input: 'mama iiyee gedhara giyaa.',
      expected: 'මම ඊයේ ගෙදර ගියා.',
      category: 'Daily language usage',
      grammar: 'Past tense',
      length: 'S'
    },
    
    {
      tcId: 'Pos_Fun_0022',
      name: 'Convert present tense',
      input: 'mama dhaen vaeda karanavaa.',
      expected: 'මම දැන් වැඩ කරනවා.',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
    {
      tcId: 'Pos_Fun_0023',
      name: 'Convert future tense',
      input: 'mama heta enavaa.',
      expected: 'මම හෙට එනවා.',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
    {
      tcId: 'Pos_Fun_0024',
      name: 'Convert negation pattern',
      input: 'mama dhannee naee.',
      expected: 'මම දන්නේ නෑ.',
      category: 'Daily language usage',
      grammar: 'Compound sentence',
      length: 'M'
    },

     {
      tcId: 'Pos_Fun_0025',
      name: 'Convert singular pronoun',
      input: 'mama yanna hadhannee.',
      expected: 'මම යන්න හදන්නේ.',
      category: 'Daily language usage',
      grammar: 'Compound sentence',
      length: 'M'
    },

     {
      tcId: 'Pos_Fun_0026',
      name: 'Convert plural pronoun',
      input: 'api yamu.',
      expected: 'අපි යමු.',
      category: 'Daily language usage',
      grammar: 'simple sentence',
      length: 'M'
    },

     {
      tcId: 'Pos_Fun_0027',
      name: 'Convert very polite request',
      input: 'karuNaakara eeka dhenavadha?',
      expected: 'කරුණාකර ඒක දෙනවද?',
      category: 'Greeting / request / response',
      grammar: 'question sentence',
      length: 'M'
    },
     {
      tcId: 'Pos_Fun_0028',
      name: 'Convert with English technical terms',
      input: 'Zoom meeting ekak thiyennee.',
      expected: 'Zoom meeting එකක් තියෙන්නේ.',
      category: ' Mixed Singlish + English',
      grammar: 'simple sentence',
      length: 'M'
    },
     {
      tcId: 'Pos_Fun_0029',
      name: 'Convert with WhatsApp and Email',
      input: 'WhatsApp msg ekak evanna puLuvandha?',
      expected: 'WhatsApp ම්ස්ග් එකක් එවන්න පුළුවන්ද?',
      category: ' Mixed Singlish + English',
      grammar: 'question sentence',
      length: 'M'
    },
     {
      tcId: 'Pos_Fun_0030',
      name: 'Convert with place name ',
      input: 'siiyaa Colombo yanna hadhannee.',
      expected: 'සීයා Colombo යන්න හදන්නේ.',
      category: 'Names / places / common English words',
      grammar: ' question sentence',
      length: 'M'
    },
     {
      tcId: 'Pos_Fun_0031',
      name: 'Convert with exclamation mark',
      input: 'hari hari!',
      expected: 'හරි හරි!',
      category: ' Punctuation / numbers',
      grammar: 'simple sentence',
      length: 'M'
    },

     {
      tcId: 'Pos_Fun_0032',
      name: 'Convert with question mark',
      input: 'oya enavadha?',
      expected: 'ඔය එනවද?',
      category: 'Daily language usage',
      grammar: 'question sentence',
      length: 'M'
    },
     {
      tcId: 'Pos_Fun_0033',
      name: 'Convert with currency',
      input: 'Rs. 5343 oonee.',
      expected: 'Rs. 5343 ඕනේ.',
      category: ' Punctuation / numbers',
      grammar: 'simple sentence',
      length: 'M'
    }
    
  ],
  
  negative: [
    {
      tcId: 'Neg_Fun_0001',
      name: ' Fail with very short incomplete input',
      input: 'mamavedataayanavaa',
      expected: 'මම වැඩට යනවා',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_0002',
      name: ' Fail to convert multiple joined words',
      input: 'matapaankannaoonee',
      expected: 'මට පාන් කන්න ඕනේ',
      category: 'Daily language usage',
      grammar: 'simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_0003',
      name: 'Fail to convert extreme slang',
      input: 'ela machan! supiri!!',
      expected: 'එල මචන්! සුපිරි!',
      category: 'Slang / informal language',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_0004',
      name: 'Fail with non-standard character combinations',
      input: 'mama vedataa yanavaa xyz123 abc',
      expected: 'මම වැඩට යනවා',
      category: 'Slang / informal language',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_0005',
      name: 'Fail to convert very informal expression',
      input: 'adoo vaedak baaragaththaanam eeka hariyata karapanko bQQ!.',
      expected: 'අඩෝ වැඩක් බාරගත්තානම් ඒක හරියට කරපන්කො බං.',
      category: ' Invalid characters',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_0006',
      name: 'Fail to handle chat-style abbreviations',
      input: 'Thx machan! ASAP email ekak evanna.',
      expected: 'Tnx මචන්! ASAP email එකක් එවන්න.',
      category: 'Slang / informal language',
      grammar: 'simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_0007',
      name: ' Fail with extremely long mixed content',
      input: 'machan mata adha meeting ekee Zoom link eka email ekak vidhihata evanna puLuvandha? Please send it before 3pm. Mama office yanna kalin check karanna oonea. Email ekak evanna amaarunam WhatsApp msg ekak dhaapan. Thx! machan mata adha meeting ekee Zoom link eka email ekak vidhihata evanna puLuvandha? Please send it before 3pm. Mama office yanna kalin check karanna oonea. Email ekak evanna amaarunam WhatsApp msg ekak dhaapan. Thx! machan mata adha meeting ekee Zoom link eka email ekak vidhihata evanna puLuvandha?',
      expected: 'මචන් මට අද meeting එකේ Zoom link එක email එකක් විදිහට එවන්න පුළුවන්ද? Please send it before 3pm. මම office යන්න කලින් check කරන්න ඕනේ. Email එකක් එවන්න අමාරුනම් WhatsApp ම්ස්ග් එකක් දාපන්. Thx! මචන් මට අද meeting එකේ Zoom link එක email එකක් විදිහට එවන්න පුළුවන්ද? Please send it before 3pm. මම office යන්න කලින් check කරන්න ඕනේ. Email එකක් එවන්න අමාරුනම් WhatsApp ම්ස්ග් එකක් දාපන්. ථx! මචන් මට අද meeting එකේ Zoom link එක email එකක් විදිහට එවන්න පුළුවන්ද?',
      category: 'Mixed Singlish + English',
      grammar: 'compound sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_0008',
      name: 'Fail with unusual special characters',
      input: 'mama @#$% gedhara yanavaa.',
      expected: 'මම ගෙදර යනවා.',
      category: ' Special characters',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_0009',
      name: 'Fail with complex number formats',
      input: 'mata Rs. 1,234,567.89 oonee.',
      expected: 'මට Rs.1,234,567.89 ඕනේ.',
      category: 'Complex numeric formats',
      grammar: ' simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_0010',
      name: 'Fail with excessive punctuation',
      input: 'hari hari!!!???',
      expected: 'හරි හරි',
      category: 'Punctuation / numbers',
      grammar: 'simple sentence',
      length: 'S'
    }
  ],
  
  ui:[ 
    {
    tcId: 'Pos_UI_0001',
    name: 'Clearing input clears or updates output',
    input: 'oyaata kohomadha',
    partialInput: 'oyaata ko',
    expectedFull: 'ඔයාට කොහොමද',
    category: ' Empty / cleared input handling',
    grammar: 'question sentence',
    length: 'S'
  },

   {
    tcId: 'Pos_UI_0002',
    name: 'Output updates while typing without button click',
    input: 'karuNaakara eeka dhenavadha',
    partialInput: 'karuNaakara eeka',
    expectedFull: 'කරුණාකර ඒක දෙනවද',
    category: 'Greeting / request / response',
    grammar: 'simple sentence',
    length: 'S'
  },

   {
    tcId: 'Neg_UI_0001',
    name: 'Output updates while typing without button click',
    input: 'machan mata adha meeting ekee Zoom link eka email ekak vidhihata evanna puLuvandha??',
    partialInput: 'machan mata adha meeting',
    expectedFull: 'මචන් මට අද meeting එකේ Zoom link එක email එකක් විදිහට එවන්න පුළුවන්ද?',
    category: 'Mixed Singlish + English',
    grammar: 'question sentence',
    length: 'M'
  },

  {
    tcId: 'Neg_UI_0002',
    name: 'Output updates while typing without button click',
    input: 'mama adahas ^ ~ dhenna yanavaa',
    partialInput: 'mama adahas ^',
    expectedFull: 'මම අදහස්  දෙන්න යනවා',
    category: ' Mixed input',
    grammar: 'Present tense',
    length: 'S'
  },


]
};

class TranslatorPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToSite() {
    await this.page.goto(CONFIG.url);
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(CONFIG.timeouts.pageLoad);
  }

  async getInputField() {
    return this.page.getByRole('textbox', { name: CONFIG.selectors.inputField });
  }

  async getOutputField() {
    return this.page
      .locator(CONFIG.selectors.outputContainer)
      .filter({ hasNot: this.page.locator('textarea') })
      .first();
  }

  async clearAndWait() {
    const input = await this.getInputField();
    await input.clear();
    await this.page.waitForTimeout(CONFIG.timeouts.afterClear);
  }

  async typeInput(text) {
    const input = await this.getInputField();
    await input.fill(text);
  }

  async waitForOutput() {
    await this.page.waitForFunction(
      () => {
        const elements = Array.from(
          document.querySelectorAll('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap')
        );
        const output = elements.find(el => {
          const isInputField = el.tagName === 'TEXTAREA' || el.getAttribute('role') === 'textbox';
          return !isInputField && el.textContent && el.textContent.trim().length > 0;
        });
        return output !== undefined;
      },
      { timeout: 10000 }
    );
    await this.page.waitForTimeout(CONFIG.timeouts.translation);
  }

  async getOutputText() {
    const output = await this.getOutputField();
    const text = await output.textContent();
    return text.trim();
  }

  async performTranslation(inputText) {
    await this.clearAndWait();
    await this.typeInput(inputText);
    await this.waitForOutput();
    return await this.getOutputText();
  }
}

test.describe('SwiftTranslator - Singlish to Sinhala Conversion Tests', () => {
  let translator;

  test.beforeEach(async ({ page }) => {
    translator = new TranslatorPage(page);
    await translator.navigateToSite();
  });

  test.describe('Positive Functional Tests', () => {
    for (const testCase of TEST_DATA.positive) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  test.describe('Negative Functional Tests', () => {
    for (const testCase of TEST_DATA.negative) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });
test.describe('UI Functionality Tests', () => {
  for (const testCase of TEST_DATA.ui) {
    test(`${testCase.tcId} - ${testCase.name}`, async ({ page }) => {
      const translator = new TranslatorPage(page);
      await translator.navigateToSite();

      const input = await translator.getInputField();

      await translator.clearAndWait();
      
      // Type partial input
      await input.type(testCase.partialInput, { delay: 150 });

      // Type remaining input
      await input.type(testCase.input.substring(testCase.partialInput.length), { delay: 150 });

      // Wait for full output
      await translator.waitForOutput(testCase.expectedFull);

      const outputText = await translator.getOutputText();
      expect(outputText).toBe(testCase.expectedFull);

      await page.waitForTimeout(CONFIG.timeouts.betweenTests);
    });
  }
});



});
