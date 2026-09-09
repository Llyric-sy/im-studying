(() => {
  window.lessonBank = window.lessonBank || {};
  window.lessonBank.acct10 = {
    unit: 'ACCT2002',
    date: '5–11 Oct',
    week: '12',
    duration: '120–180 min',
    title: '10 · Cost–Volume–Profit Analysis',
    sourceBasis: 'Curtin ACCT2002 Module 10 Cost–Volume–Profit Analysis lecture deck (2026), adapted from Datar & Rajan 17E Chapter 3, plus the supplied Additional Questions set.',
    objectives: [
      'Explain what CVP analysis is actually trying to answer for a manager.',
      'Calculate contribution margin, contribution margin ratio, breakeven units and breakeven revenue.',
      'Calculate the sales volume needed for a target operating income or target net income.',
      'Use equation, contribution-margin and graph approaches without mixing them up.',
      'Explain the assumptions behind CVP and when those assumptions become risky.',
      'Use sensitivity analysis, margin of safety and operating leverage to reason about risk.',
      'Handle multi-product sales mixes and explain why a changing mix changes the answer.',
      'Apply CVP logic to service and not-for-profit organisations.'
    ],
    map: ['selling price and volume','variable costs','contribution margin','fixed costs','operating income','breakeven / target profit','risk and sensitivity','sales mix'],
    sections: [
      {
        kicker: 'big picture',
        title: '1. What problem is CVP solving?',
        body: [
          'Cost–volume–profit analysis asks a simple managerial question: if price, sales volume, variable cost or fixed cost changes, what happens to profit?',
          'The key insight is that each unit sold first has to cover its own variable cost. Whatever is left over contributes toward fixed costs. Only after fixed costs have been covered does the same contribution begin producing operating profit.',
          'That is why contribution margin is the centre of the entire topic. CVP is not just a breakeven formula; it is a way to model the profit consequences of decisions before committing to them.'
        ],
        flow: ['revenue per unit','less variable cost per unit','contribution margin per unit','covers fixed costs','then creates operating income'],
        callout: 'If you understand contribution margin as the amount each sale contributes after its own variable costs, the rest of CVP becomes much easier.',
        checkpoint: 'I can explain CVP without using a formula.'
      },
      {
        kicker: 'foundation',
        title: '2. Contribution margin and the contribution-format income statement',
        body: [
          'Contribution margin is total revenue minus total variable costs. Contribution margin per unit is selling price per unit minus variable cost per unit.',
          'A contribution-format income statement groups costs by behaviour rather than by function. It therefore makes the CVP relationship visible: revenue minus variable costs gives contribution margin; contribution margin minus fixed costs gives operating income.',
          'The contribution margin ratio, also called the contribution margin percentage, tells you how much of each dollar of revenue is available to cover fixed costs and profit.'
        ],
        formulas: [
          'CM per unit = Selling price per unit − Variable cost per unit',
          'Total CM = Total revenue − Total variable costs',
          'CM ratio = Contribution margin ÷ Revenue',
          'Operating income = Contribution margin − Total fixed costs'
        ],
        practicePrompt: 'Suppose a product sells for $80 and has variable cost of $50. State the CM per unit and explain what the $30 actually does.',
        checkpoint: 'I can move between selling price, variable cost, contribution margin and operating income.'
      },
      {
        kicker: 'three representations',
        title: '3. Equation method, contribution-margin method and graph method',
        body: [
          'Curtin presents three ways to express the same CVP relationship. The equation method starts from revenue less variable and fixed costs. The contribution-margin method compresses selling price less variable cost into CM per unit. The graph method shows total revenue and total cost lines visually.',
          'You should be able to recognise that these are not three different theories. They are three representations of the same relationship. Use whichever makes the decision easiest to see.',
          'On a CVP graph, total fixed cost is the intercept of the total-cost line, total revenue begins from zero when no units are sold, and breakeven is the intersection of total revenue and total cost.'
        ],
        formulas: [
          'Operating income = (SP × Q) − (VC × Q) − TFC',
          'Operating income = (CM per unit × Q) − TFC'
        ],
        callout: 'A very common error is to use revenue instead of contribution margin when fixed costs still need to be covered.',
        checkpoint: 'I can show why the equation and CM methods give the same answer.'
      },
      {
        kicker: 'breakeven',
        title: '4. Breakeven point in units and revenue',
        body: [
          'Breakeven is the sales quantity where operating income equals zero. At that point total contribution margin exactly equals total fixed cost.',
          'For units, divide total fixed costs by contribution margin per unit. For revenue, divide total fixed costs by the contribution margin ratio. These are two ways of expressing the same economic point.',
          'Breakeven is useful because it gives management a minimum sales threshold. Below it, the business makes an operating loss; above it, each extra unit contributes its CM to operating profit, assuming the CVP assumptions continue to hold.'
        ],
        formulas: [
          'Breakeven units = TFC ÷ CM per unit',
          'Breakeven revenue = TFC ÷ CM ratio'
        ],
        practicePrompt: 'If fixed costs are $120,000, price is $50 and variable cost is $30, calculate breakeven units before revealing any answer below.',
        checkpoint: 'I can calculate and interpret breakeven in both units and dollars.'
      },
      {
        kicker: 'target profit',
        title: '5. Target operating income and target net income',
        body: [
          'Breakeven is only the special case where target operating income is zero. For any positive target operating income, add that target to fixed costs before dividing by contribution margin.',
          'If management gives you a target net income after tax, do not plug it straight into the CVP formula. Convert target net income to the pre-tax operating income required, then solve for volume.',
          'This distinction matters because CVP formulas are built around operating income before income tax.'
        ],
        formulas: [
          'Target units = (TFC + Target operating income) ÷ CM per unit',
          'Target revenue = (TFC + Target operating income) ÷ CM ratio',
          'Required operating income = Target net income ÷ (1 − tax rate)'
        ],
        callout: 'After-tax target profit must be grossed up to a pre-tax operating-income target first.',
        checkpoint: 'I can convert a net-income target into the operating-income target required for CVP.'
      },
      {
        kicker: 'model limits',
        title: '6. CVP assumptions and the relevant-range mindset',
        body: [
          'The lecture assumes volume is the only cause of cost and revenue changes, total cost can be split into fixed and variable components, and revenue and cost relationships are linear.',
          'It also assumes selling price, variable cost per unit and fixed costs are known and constant. For multiple products, the relative sales proportions are assumed known and constant. Time value of money is ignored.',
          'These assumptions make the model useful, but they are also where the model can fail. In real life prices can change with volume, overtime can change variable cost, capacity expansions can step up fixed costs, and sales mix can move.'
        ],
        bullets: [
          'Volume is treated as the principal driver of revenue and cost change.',
          'Fixed and variable cost behaviour is assumed stable over the range analysed.',
          'Selling price and unit variable cost are treated as constant.',
          'For multiple products, sales mix is treated as constant.',
          'Interest/time value of money is ignored.'
        ],
        checkpoint: 'I can name the assumptions and explain why breakeven is an estimate, not a law of nature.'
      },
      {
        kicker: 'decisions',
        title: '7. Using CVP for pricing, advertising and other decisions',
        body: [
          'CVP becomes a decision tool when one variable changes and management asks whether the expected increase in contribution margin is enough to justify the change.',
          'An advertising decision may increase fixed cost but also increase unit sales. A price cut lowers contribution margin per unit but may increase volume. A target-price decision can be tested by asking whether the resulting contribution margin can support the fixed-cost structure and desired profit.',
          'The right approach is to compare the whole profit effect, not to judge one number in isolation.'
        ],
        flow: ['proposed decision','identify changed SP / VC / FC / Q','recalculate CM','recalculate operating income','compare alternatives'],
        checkpoint: 'I can use CVP to compare two managerial alternatives rather than only calculate breakeven.'
      },
      {
        kicker: 'uncertainty',
        title: '8. Sensitivity analysis and margin of safety',
        body: [
          'Sensitivity analysis is a what-if method: change an assumption and see how the result changes. This is especially important because CVP begins with simplified assumptions.',
          'Margin of safety measures how far expected or actual sales are above breakeven. A small margin means only a modest adverse sales change could push the organisation into loss; a large margin gives more buffer.',
          'Use sensitivity analysis to ask questions such as: what if volume is 10% lower, variable cost rises, price must fall, or fixed costs increase?'
        ],
        formulas: [
          'Margin of safety = Budgeted (or actual) sales − Breakeven sales',
          'Margin of safety % = Margin of safety ÷ Budgeted (or actual) sales'
        ],
        checkpoint: 'I can explain why a lower margin of safety means higher operating risk.'
      },
      {
        kicker: 'risk-return structure',
        title: '9. Fixed versus variable costs and operating leverage',
        body: [
          'Choosing a cost structure is strategic. A business can sometimes substitute fixed costs for variable costs—for example, automation may increase fixed equipment costs while reducing labour cost per unit.',
          'A higher fixed-cost structure can create stronger profit growth once sales are high enough, because each extra unit may carry a larger contribution margin. But the same structure is more exposed when sales fall because fixed costs still have to be paid.',
          'Operating leverage describes this sensitivity of operating income to changes in sales and contribution margin.'
        ],
        formulas: ['Degree of operating leverage = Contribution margin ÷ Operating income'],
        callout: 'High operating leverage magnifies both upside and downside. It is not automatically “better”.',
        checkpoint: 'I can connect cost structure to operating risk and profit sensitivity.'
      },
      {
        kicker: 'multiple products',
        title: '10. Sales mix and weighted-average contribution margin',
        body: [
          'When a company sells multiple products, each product can have a different price, variable cost and contribution margin. You therefore cannot use one product’s CM as if all sales were identical.',
          'CVP can still be used if the expected sales mix is known. Build a weighted-average contribution margin based on the assumed proportions, then use that average in the breakeven or target-profit calculation.',
          'The catch is important: if the mix changes, the weighted average changes, so the calculated breakeven point also changes. Selling more high-CM products generally improves the mix; selling more low-CM products generally worsens it.'
        ],
        flow: ['product CMs','sales proportions','weighted-average CM','composite breakeven','split back into product quantities'],
        checkpoint: 'I can explain why a changing sales mix changes breakeven even if total units sold are unchanged.'
      },
      {
        kicker: 'beyond manufacturing',
        title: '11. Services and not-for-profit organisations',
        body: [
          'CVP is not limited to manufacturing. The main adjustment is deciding what “volume” means. A service organisation might use billable hours, appointments, passengers, subscriptions or cases. A not-for-profit may use clients served, events run or service units delivered.',
          'Once the output measure is sensible, the same logic applies: identify variable cost per unit of output, fixed cost, contribution per unit or per revenue dollar, then model the activity level required to cover costs or achieve a financial target.'
        ],
        checkpoint: 'I can choose an appropriate output measure for a service or not-for-profit CVP problem.'
      }
    ],
    practice: [
      {q:'A product sells for $50, variable cost is $30 and total fixed cost is $120,000. What is breakeven volume?', hint:'Find CM per unit first.', answer:'CM per unit = $20. Breakeven units = $120,000 ÷ $20 = 6,000 units.'},
      {q:'Using the same data, how many units are needed for $60,000 target operating income?', hint:'Add target operating income to fixed cost.', answer:'($120,000 + $60,000) ÷ $20 = 9,000 units.'},
      {q:'If the target is $42,000 net income and the tax rate is 30%, what pre-tax operating income target should enter the CVP formula?', hint:'Divide by 1 minus the tax rate.', answer:'$42,000 ÷ 0.70 = $60,000 target operating income.'},
      {q:'Budgeted sales are $500,000 and breakeven sales are $380,000. What is margin of safety and margin of safety percentage?', answer:'Margin of safety = $120,000. Margin of safety percentage = $120,000 ÷ $500,000 = 24%.'},
      {q:'Why can a high-fixed-cost automated business outperform when sales rise but suffer more when sales fall?', answer:'Because higher fixed costs increase operating leverage. After fixed costs are covered, a strong contribution margin can magnify profit growth, but fixed costs remain payable when sales decline, magnifying downside too.'},
      {q:'A company sells A and B in a stable 3:2 mix. A has CM $30 and B has CM $10. What is the weighted-average CM per unit?', answer:'(3/5 × $30) + (2/5 × $10) = $18 + $4 = $22 per unit of the assumed mix.'}
    ],
    finish: [
      'I can explain contribution margin in plain English.',
      'I can solve breakeven and target-profit problems in units and revenue.',
      'I know when to convert target net income to operating income.',
      'I can list the major CVP assumptions and challenge them in a scenario.',
      'I can calculate and interpret margin of safety and operating leverage.',
      'I can handle a stable multi-product sales mix.',
      'I attempted the supplied Module 10 / AQ practice before checking solutions.'
    ]
  };
})();