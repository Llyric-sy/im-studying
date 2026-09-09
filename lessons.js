/*
  Actual learning layer for im-studying.
  This file deliberately contains derived study explanations, not copied lecture decks.
  Original Curtin/Pearson materials remain outside the public repository.
*/

const unitOverviews = {
  acct: {
    heading: 'what is cost analysis actually about?',
    body: 'This unit is about giving managers useful cost information so they can make better decisions. You first learn the language of costs, then learn how to estimate and assign those costs, and finally use the numbers for pricing, budgeting and management decisions.',
    map: ['understand the business decision', 'identify the relevant costs', 'measure / assign the costs', 'use the result to decide', 'compare what happened with the plan']
  },
  ecom: {
    heading: 'what is business analytics actually about?',
    body: 'This unit is about turning messy business data into something you can use to make a decision. The Excel tools matter, but the real skill is knowing what question you are answering, what method fits, what the result means and how to communicate it clearly.',
    map: ['clean / organise data', 'describe what happened', 'find relationships', 'model / forecast', 'communicate the result', 'use data responsibly']
  },
  taxa: {
    heading: 'what is Australian taxation law actually about?',
    body: 'The unit is about taking a real transaction or taxpayer situation, finding the relevant tax rule, applying that rule to the facts and explaining the tax consequence. Detailed lessons will expand as the remaining lecture and tutorial packs arrive.',
    map: ['identify the taxpayer / transaction', 'find the tax issue', 'apply the rule', 'calculate the consequence', 'explain the conclusion']
  },
  econ: {
    heading: 'what is introductory economics actually about?',
    body: 'The unit moves from choices and strategic interactions into economy-wide output, unemployment, inflation and policy. Detailed lessons will expand when the teaching files are added; assessed MyLabs work remains separately flagged.',
    map: ['identify the economic problem', 'understand incentives / behaviour', 'use the model', 'interpret the outcome', 'connect it to policy / evidence']
  }
};

const acctLessons = {
  acct1: {
    purpose: 'Before doing any calculations, you need to know what management accounting is for. The point is not to produce a statutory report; it is to help people inside an organisation plan, control and make decisions.',
    diagram: ['economic events + business data', 'management accountant', 'useful financial + non-financial information', 'manager chooses / acts', 'results are reviewed and learned from'],
    sections: [
      ['management vs financial accounting', [
        '<b>Management accounting</b> is mainly for internal users. It is decision-focused, can be future-oriented, can be produced whenever managers need it and is not restricted to one standard report format.',
        '<b>Financial accounting</b> is mainly for external users. It is more historical and aggregated, and its reports follow financial-reporting rules.',
        'A useful shortcut: management accounting asks <b>“what should we do?”</b>; financial accounting is more about <b>“what happened, and how do we report it externally?”</b>.'
      ]],
      ['three roles you should recognise in questions', [
        '<b>Scorekeeping</b> = record / report what happened.',
        '<b>Attention directing</b> = point management toward something that needs attention, such as a decline or variance.',
        '<b>Problem solving</b> = analyse alternatives and help decide what to do next.'
      ]],
      ['decision-making cycle', [
        '1. Identify the problem and uncertainties.',
        '2. Obtain information.',
        '3. Make predictions about the future.',
        '4. Choose among alternatives.',
        '5. Implement the decision, evaluate performance and learn.'
      ]],
      ['planning, control and the three guidelines', [
        '<b>Planning</b> means selecting goals/strategies and deciding how to achieve them. A <b>budget</b> is the quantitative expression of a proposed plan.',
        '<b>Control</b> means implementing the plan, evaluating results and using feedback to improve later decisions.',
        'The course guidelines are: <b>cost-benefit</b>, consider <b>behavioural + technical</b> issues, and remember that <b>different costs are useful for different purposes</b>.'
      ]],
      ['organisation and ethics', [
        '<b>Line management</b> is directly responsible for organisational goals; <b>staff management</b> provides advice/support.',
        'The lecture ethics standards to recognise are <b>competence, confidentiality, integrity and credibility</b>. The tutorial material also uses honesty, fairness, objectivity and responsibility.'
      ]]
    ],
    example: {
      title: 'recognise the accountant’s role',
      lines: [
        'Preparing last year’s monthly sales report → <b>scorekeeping</b>.',
        'Highlighting which products declined → <b>attention directing</b>.',
        'Analysing alternative ways to reduce warranty costs → <b>problem solving</b>.'
      ]
    },
    trap: 'Do not treat “budgeting” as the whole of planning. Planning is broader; the budget is one quantified expression of the plan.',
    check: ['Can I explain management vs financial accounting without memorising a paragraph?', 'Can I classify record / flag / solve situations?', 'Can I recite the five decision steps in order?'],
    sources: 'Module 1 slides · Tutorial 1 solutions · Module 1 revision material · Additional Questions AQ-1 to AQ-3'
  },
  acct2: {
    purpose: 'Strategy is the organisation deciding where it wants to go and how it intends to win over the long run. Management accountants support strategy by supplying information about customers, competitors, costs, resources and financial capacity.',
    diagram: ['vision / mission / objectives', 'analyse outside + inside', 'choose where to compete', 'choose how to compete', 'support with functions + resources'],
    sections: [
      ['vision, mission and objectives', [
        '<b>Vision</b> = desired future state or aspiration: where do we want to end up?',
        '<b>Mission</b> = overall purpose and boundaries: why do we exist / what business are we in?',
        '<b>Objectives</b> = more specific aims, often measurable and time-related.'
      ]],
      ['analyse outside vs inside', [
        'For <b>SWOT</b>: strengths and weaknesses are internal; opportunities and threats are external.',
        'For the external environment, recognise Porter’s Five Forces: buyer power, supplier power, substitutes, threat of new entrants and rivalry.',
        'Inside the company, think about resources and capabilities: what assets does the firm control and what can it actually do well?'
      ]],
      ['three levels of strategy', [
        '<b>Corporate</b> = what businesses should we operate in?',
        '<b>Business</b> = how should we compete in that business?',
        '<b>Functional</b> = what systems / activities support the business strategy?'
      ]],
      ['BCG + competitive advantage', [
        'The lecture BCG actions are: <b>Star → Hold</b>, <b>Question Mark → Build</b>, <b>Cash Cow → Harvest</b>, <b>Dog → Divest</b>.',
        '<b>Cost leadership</b> = win through lower costs, productivity, scale, efficiency and tight cost control.',
        '<b>Differentiation</b> = win by offering something customers perceive as meaningfully unique.'
      ]]
    ],
    example: {
      title: 'case clues',
      lines: [
        '“Low-price standard product, cost reduction, productivity” → usually <b>cost leadership</b>.',
        '“Unique features, premium quality, craftsmanship, special service” → usually <b>differentiation</b>.',
        'Best case-answer pattern: <b>name the framework → cite the case fact → explain the strategic effect</b>.'
      ]
    },
    trap: 'Profitability by itself is not the same thing as competitive advantage. The course revision solution says competitive advantage is superior performance relative to competitors.',
    check: ['Can I distinguish vision / mission / objectives?', 'Can I sort a fact into SWOT quickly?', 'Can I apply all five forces to a short case?', 'Can I recognise cost leadership vs differentiation from clues?'],
    sources: 'Module 2 Strategy slides · Tutorial 2 solutions · Module 2 revision + solutions · Additional Questions AQ-4 to AQ-7'
  },
  acct3: {
    purpose: 'This topic teaches the cost language used throughout the rest of the unit. Before calculating, always ask: what is the cost object, what decision is this cost for, and are we talking about total cost or cost per unit?',
    diagram: ['cost occurs', 'identify the COST OBJECT', 'trace if direct / allocate if indirect', 'classify behaviour', 'flow manufacturing cost: RM → WIP → FG → COGS'],
    sections: [
      ['direct vs indirect', [
        '<b>Direct cost</b> can be conveniently and economically traced to the chosen cost object.',
        '<b>Indirect cost</b> cannot be conveniently/economically traced, so it is allocated rationally and systematically.',
        'Direct/indirect is relative to the <b>cost object</b>. The same cost can be direct to a department but indirect to one product.'
      ]],
      ['variable vs fixed — total and per unit are different', [
        '<b>Variable:</b> total cost changes with activity; variable cost per unit stays constant.',
        '<b>Fixed:</b> total cost stays constant within the relevant range; fixed cost per unit changes as volume changes.',
        '<b>Relevant range</b> = the normal band of activity where the assumed cost behaviour still holds.'
      ]],
      ['manufacturing cost categories', [
        '<b>DM</b> = direct materials. <b>DL</b> = direct manufacturing labour. <b>MOH</b> = other manufacturing costs that are not economically traceable.',
        'Product/inventoriable cost for a manufacturer = <b>DM + DL + MOH</b>. These costs sit in inventory until the related product is sold.',
        'Selling, advertising, distribution and administration are usually <b>period costs</b> and are expensed in the period.'
      ]],
      ['manufacturing flow + formulas', [
        '<code>DM used = Opening RM + Purchases − Ending RM</code>',
        '<code>TMC = DM used + DL + MOH</code>',
        '<code>COGM = Opening WIP + TMC − Ending WIP</code>',
        '<code>COGS = Opening FG + COGM − Ending FG</code>',
        '<code>Prime = DM + DL</code> · <code>Conversion = DL + MOH</code>'
      ]]
    ],
    example: {
      title: 'Lone Oak illustration — follow the flow, do not jump straight to COGS',
      lines: [
        'Manufacturing overhead = indirect labour 109,000 + production share of depreciation 60,000 + other factory costs 344,000 = <b>$513,000</b>.',
        'Direct materials used = 15,800 + 175,000 − 18,200 = <b>$172,600</b>.',
        'Total manufacturing costs = 172,600 + 254,000 + 513,000 = <b>$939,600</b>.',
        'COGM = 35,700 + 939,600 − 62,100 = <b>$913,200</b>.',
        'COGS = 111,100 + 913,200 − 97,900 = <b>$926,400</b>.'
      ]
    },
    trap: 'Indirect does not automatically mean manufacturing overhead. Advertising can be indirect to a product but is still a period/selling cost. Also, direct labour appears in BOTH prime cost and conversion cost.',
    check: ['Do I identify the cost object before direct/indirect?', 'Can I explain total vs per-unit behaviour?', 'Can I run RM → TMC → WIP/COGM → FG/COGS in order?', 'Can I separate product costs from period costs?'],
    sources: 'Module 3 slides · Tutorial 3 solutions · Module 3 revision + solutions · Illustration Question 1 + solution · Additional Questions AQ-8/AQ-9'
  },
  acct4: {
    purpose: 'You are trying to turn a messy cost into a usable equation: what part of the cost exists even with little activity, and what part changes as activity changes?',
    diagram: ['observe activity + cost', 'choose a causal cost driver', 'estimate fixed part a', 'estimate variable rate b', 'predict with y = a + bX', 'evaluate whether the model makes sense'],
    sections: [
      ['the basic cost function', [
        '<code>y = a + bX</code>',
        '<b>y</b> = cost being predicted (dependent variable).',
        '<b>a</b> = fixed-cost intercept / constant.',
        '<b>b</b> = variable cost per unit / slope.',
        '<b>X</b> = cost driver (independent variable).'
      ]],
      ['ways to estimate cost behaviour', [
        'The tutorial lists four approaches: industrial engineering, conference, account analysis and quantitative analysis of current/past cost relationships.',
        'Causality should run from the chosen <b>cost driver</b> to the cost being predicted.'
      ]],
      ['high-low method', [
        'Choose the observations with the <b>highest and lowest activity</b>, not simply highest and lowest cost.',
        '<code>b = change in cost ÷ change in activity</code>.',
        'Then substitute one high/low point into <code>y = a + bX</code> to solve for <b>a</b>.',
        'Strength: fast and easy. Weakness: uses only two observations, which may not represent the whole dataset.'
      ]],
      ['regression', [
        'Regression uses all available observations rather than only the two extremes.',
        'In the supplied 10-32 solution the fitted equation is about <code>y = 3.6675x + 2135.5</code> with <code>R² = 0.9854</code>. The tutorial interprets this as a very strong fit, with more than 98% of cost variation explained by quantity.',
        'The course asks you to think about <b>economic plausibility</b>, <b>goodness of fit</b> and the <b>significance of the independent variable</b>.'
      ]]
    ],
    example: {
      title: 'IQ-2 high-low utilities example',
      lines: [
        'Highest machine-hours = 61,500 at $36,150; lowest = 31,500 at $33,150.',
        'Variable rate = (36,150 − 33,150) ÷ (61,500 − 31,500) = <b>$0.10 per machine hour</b>.',
        'Fixed cost = 36,150 − (61,500 × 0.10) = <b>$30,000</b>.',
        'Equation: <code>Utilities cost = 30,000 + 0.10X</code>.',
        'At 39,000 machine hours: 30,000 + (0.10 × 39,000) = <b>$33,900</b>.'
      ]
    },
    trap: 'High-low means highest and lowest COST DRIVER activity, not highest and lowest cost. Also remember correlation by itself is not a reason to choose a driver; the relationship should make economic sense.',
    check: ['Can I label y, a, b and X?', 'Can I perform high-low without looking up the steps?', 'Can I explain why regression is usually more informative than high-low?', 'Can I interpret R² in context rather than just quote it?'],
    sources: 'Module 4 slides · Tutorial 4 solutions · Illustration Question 2 + solution · 10-32 dataset / worked regression'
  },
  acct5: {
    purpose: 'Job costing is used when individual jobs consume different amounts of resources. Direct costs are traced to the job; indirect manufacturing costs are allocated using a chosen base and a predetermined rate.',
    diagram: ['identify JOB', 'trace direct materials + direct labour', 'choose overhead allocation base', 'calculate predetermined OH rate', 'apply OH to job', 'job cost sits WIP → FG → COGS'],
    sections: [
      ['job vs process costing', [
        '<b>Job costing</b> suits distinct jobs/products that use different resources.',
        '<b>Process costing</b> suits many identical or similar units where average cost is meaningful.'
      ]],
      ['normal costing logic', [
        '1. Identify the job/cost object.',
        '2. Identify and trace direct costs.',
        '3. Select cost-allocation base(s) for indirect costs.',
        '4. Identify the indirect-cost pool(s).',
        '5. Compute the budgeted / predetermined overhead rate.',
        '6. Apply indirect costs using actual quantity of the allocation base × budgeted rate.',
        '7. Add traced direct costs + allocated indirect costs to get total job cost.'
      ]],
      ['actual vs normal costing', [
        'The key normal-costing idea is to allocate overhead using a <b>budgeted rate</b> multiplied by the <b>actual allocation-base quantity</b>.',
        'Because actual overhead and applied overhead usually differ, the period can finish <b>underallocated</b> or <b>overallocated</b>.'
      ]],
      ['where job costs flow', [
        'Direct materials, direct labour and allocated overhead enter <b>Work in Process</b>.',
        'When the job is completed, total job cost moves to <b>Finished Goods</b>.',
        'When it is sold, the cost moves to <b>Cost of Goods Sold</b>.'
      ]]
    ],
    example: {
      title: 'IQ-3 + IQ-4 overhead examples',
      lines: [
        'Alpha: predetermined overhead rate = 432,000 ÷ 60,000 DLH = <b>$7.20 per direct-labour hour</b>.',
        'Actual hours across jobs = 58,000, so applied OH = 58,000 × 7.20 = <b>$417,600</b>. Actual OH = $420,000, so OH is <b>$2,400 underapplied</b>.',
        'Jay Furniture: rate = 900,000 ÷ 100,000 DLH = <b>$9/hour</b>; applied OH = 110,000 × 9 = $990,000 versus actual $980,000 → <b>$10,000 overapplied</b>.',
        'If prorated 10% / 25% / 65%, that $10,000 goes $1,000 WIP, $2,500 FG and $6,500 COGS.'
      ]
    },
    trap: 'Applied overhead is not actual overhead. Applied OH comes from the predetermined rate × actual allocation base. The difference is what creates under/overallocation.',
    check: ['Can I explain job vs process costing?', 'Can I calculate a predetermined overhead rate?', 'Can I tell underallocated from overallocated?', 'Can I explain WIP → FG → COGS for a job?'],
    sources: 'Module 5 slides · Tutorial 5 solutions · Illustration Questions 3 and 4 + solutions · Additional Question AQ-11'
  },
  acct6: {
    purpose: 'Process costing is for mass production of identical or similar units. Instead of asking “what did Job 431 cost?”, the system asks “how much cost belongs to the output of this process?”',
    diagram: ['physical units', 'convert unfinished work to equivalent units', 'collect costs to account for', 'cost per equivalent unit', 'assign cost to completed output + ending WIP'],
    sections: [
      ['when process costing makes sense', [
        'Process costing assigns total process costs across many identical/similar units.',
        'A simple average unit cost works when units receive similar amounts of direct materials, labour and overhead.'
      ]],
      ['the five-step process', [
        '1. Summarise the flow of physical units.',
        '2. Compute output in <b>equivalent units</b>.',
        '3. Summarise total costs to account for.',
        '4. Compute cost per equivalent unit.',
        '5. Assign costs to units completed and units in ending WIP.'
      ]],
      ['equivalent units in plain English', [
        'Equivalent units translate unfinished work into the amount of fully completed output that the work represents.',
        'The lecture example: two half-completed units = one equivalent completed unit. So 10,000 units that are 70% complete = <b>7,000 equivalent units</b>.',
        'Equivalent units are calculated separately for inputs such as direct materials and conversion costs.'
      ]],
      ['weighted-average method', [
        'Weighted-average does not separate prior-period work from current-period work. It blends beginning WIP with current work and costs.',
        'Cost per equivalent unit is based on <b>all costs entering WIP ÷ total equivalent units of work done to date</b>.',
        'That average cost is assigned to units completed/transferred out and to ending WIP.'
      ]]
    ],
    example: {
      title: 'equivalent-unit intuition',
      lines: [
        'Imagine 1,000 ending-WIP units that are 40% complete for conversion.',
        'For conversion effort, that unfinished work represents <b>400 equivalent units</b>.',
        'The point is not to pretend there are 400 physical units; it is to express the amount of work in “fully completed unit” terms so cost can be assigned fairly.'
      ]
    },
    trap: 'In Step 2, focus on quantities first. The lecture explicitly says to disregard dollar amounts until equivalent units are computed.',
    check: ['Can I list all five process-costing steps?', 'Can I explain equivalent units without a formula?', 'Can I calculate 70% of 10,000 correctly as 7,000 EU?', 'Can I explain what weighted-average blends together?'],
    sources: 'Module 6 Process Costing slides · Unit-outline tutorial set 18-3, 18-5, 18-24, 18-25, 18-36, AQ-12'
  },
  acct7: {
    purpose: 'ABC exists because one broad overhead average can make simple products look too expensive and complex products look too cheap. ABC tries to follow the activities that actually consume resources.',
    diagram: ['indirect resources', 'ACTIVITIES / cost pools', 'activity cost drivers', 'products / services consume activities', 'more accurate product cost', 'use information to manage activities'],
    sections: [
      ['why broad averaging can fail', [
        '<b>Undercosting</b> = a product consumes lots of resources but gets too little cost assigned.',
        '<b>Overcosting</b> = a product consumes fewer resources but gets too much cost assigned.',
        'When one product is undercosted, at least one other product is effectively overcosted: <b>product-cost cross-subsidisation</b>.'
      ]],
      ['what ABC changes', [
        'ABC identifies <b>activities</b> as fundamental sources of indirect cost: setting up machines, processing orders, inspections, distribution and so on.',
        'Costs are grouped into <b>activity cost pools</b>, then allocation bases / cost drivers are chosen that reflect what causes each activity cost.',
        'Products receive activity cost according to how much of each activity they use.'
      ]],
      ['the four-level cost hierarchy', [
        '<b>Output unit-level</b> — related to each individual unit.',
        '<b>Batch-level</b> — related to a group/batch of units.',
        '<b>Product/service-sustaining</b> — supports a particular product/service regardless of units/batches.',
        '<b>Facility-sustaining</b> — supports the facility as a whole and is difficult to trace causally to individual products.'
      ]],
      ['ABC as management, not just costing', [
        'Activity-Based Management uses ABC information to improve decisions and the activities themselves.',
        'More detail is not automatically better. The module warns that ABC requires more measurement, more calculations, regular rate updates and can become costly or misleading if poor drivers are chosen.'
      ]]
    ],
    example: {
      title: 'why a complex low-volume product can be undercosted by a simple system',
      lines: [
        'Suppose Product A is high-volume but needs few setups and inspections, while Product B is low-volume but needs many setups, production orders and inspections.',
        'A single “machine-hours” overhead rate may dump too much overhead on A simply because A has more volume.',
        'ABC separates setup/order/inspection activity, so B receives more of the overhead it actually causes. That can reverse apparent product profitability.'
      ]
    },
    trap: 'A cost driver should have a sensible cause-and-effect relationship with the activity cost. Choosing a convenient but inaccurate driver can make ABC information misleading.',
    check: ['Can I explain undercosting and overcosting?', 'Can I draw resource → activity pool → driver → product?', 'Can I name the four hierarchy levels?', 'Can I explain why ABC can be useful but costly?'],
    sources: 'Module 7 ABC/ABM slides · Additional Question AQ-13 · unit-outline tutorial questions 5-2, 5-11, 5-27, 5-29'
  },
  acct8: {
    purpose: 'Pricing is a decision made under market pressure. The firm cannot look only at its own costs: it has to consider customers, competitors and costs together.',
    diagram: ['customers: willingness to pay', 'competitors: alternatives + reaction', 'company costs', 'choose pricing approach', 'target acceptable cost / return', 'manage cost across product life'],
    sections: [
      ['three influences on price', [
        '<b>Customers</b> affect price through demand and willingness to pay for features/quality.',
        '<b>Competitors</b> affect price through their technologies, capacity, costs and strategy.',
        '<b>Costs</b> affect the quantity a firm is willing and able to supply profitably.'
      ]],
      ['market-based vs cost-based pricing', [
        '<b>Market-based</b>: start with customers and competitors — “what price can the market support?”',
        '<b>Cost-based / cost-plus</b>: start with cost — “what price recovers cost and provides the target return?”'
      ]],
      ['target costing', [
        'Target costing is <b>price-led costing</b>. Start with the market price, subtract the target profit, and the remainder is the target / allowable cost.',
        '<code>Target cost = Target selling price − Target profit</code>',
        'If current cost is above target cost, managers must redesign the product/process or reduce non-value-added cost if they want the target return at the market price.'
      ]],
      ['locked-in and life-cycle costs', [
        'A cost may be <b>locked in</b> by an early design choice even though the cash is spent later.',
        'Life-cycle budgeting/costing looks across R&D, design, production, distribution, customer support and other stages rather than only the manufacturing period.',
        'The module emphasises that many costs can be locked in during R&D/design, which is why cost management early in the life cycle matters.'
      ]]
    ],
    example: {
      title: 'AQ-14 Leno — why target costing changes the question',
      lines: [
        'Current unit cost = 30 DM + 75 DL + 50 MOH + 25 S&A = <b>$180</b>.',
        'With a 25% markup on total cost, cost-plus selling price = 180 × 1.25 = <b>$225</b>.',
        'But the comparable market price is <b>$195</b>. The company therefore cannot simply insist on $225 if customers have equivalent alternatives at $195.',
        'Target costing starts at the $195 market price and works backward to the cost the firm can afford while earning its desired profit.'
      ]
    },
    trap: 'Cost-plus and target costing run in opposite directions. Cost-plus is cost → markup → price. Target costing is market price → target profit → allowable cost.',
    check: ['Can I name customers / competitors / costs as the three influences?', 'Can I distinguish market-based and cost-based approaches?', 'Can I calculate a target cost?', 'Can I explain “locked-in” cost without saying it has already been paid?'],
    sources: 'Module 8 Pricing Decisions & Cost Management slides · Additional Question AQ-14 · unit-outline tutorial questions 14-1, 14-5, 14-19, 14-23, 14-35, 14-36'
  },
  acct9: {
    purpose: 'A master budget turns strategy and operating plans into linked numbers. Each sub-budget feeds the next, so one assumption — such as sales volume — can flow through production, materials, labour, cash and the financial statements.',
    diagram: ['sales / revenue budget', 'production budget', 'DM + DL + MOH budgets', 'COGS + operating cost budgets', 'budgeted income statement', 'cash / capex budgets', 'budgeted balance sheet + cash flows'],
    sections: [
      ['what a budget is', [
        'The lecture defines a budget as the <b>quantitative expression of a proposed plan of action for a specified period</b>.',
        'It coordinates what needs to be done and provides a road map against which actual results can later be compared.',
        'Strategic plans are longer-run; operating plans and budgets translate strategy into shorter-run actions.'
      ]],
      ['how the operating budget links together', [
        'The lecture flow includes revenue, production, ending inventory, direct materials, direct labour, manufacturing overhead, COGS, operating costs and the budgeted income statement.',
        'Financial budgets then include capital expenditures, cash, budgeted balance sheet and budgeted statement of cash flows.'
      ]],
      ['production-budget logic', [
        '<code>Required production = Budgeted sales + Desired ending FG − Beginning FG</code>.',
        'The reason is the same inventory logic used earlier in Module 3: what you need to sell plus what you want left at the end, less what you already have.'
      ]],
      ['responsibility accounting', [
        'Responsibility accounting links information and performance to the part of the organisation for which a manager is responsible.',
        'The unit also emphasises human aspects: budgets affect behaviour, incentives and decision-making, so a technically correct budget can still fail if implemented badly.'
      ]]
    ],
    example: {
      title: 'AQ-15 Wesley — how assumptions cascade',
      lines: [
        'Each handisaw sells for <b>$44</b>, so the sales budget starts with expected units × $44.',
        'Ending finished-goods policy is <b>30% of next month’s sales</b>, so the production budget must include that desired inventory.',
        'Each unit needs <b>0.75 labour hours at $18/hour</b>, so direct-labour cost per produced unit is $13.50 before applying it to monthly production.',
        'Each unit needs two plastic components at <b>$3.50 each</b>; raw-material purchases also have to account for the policy of ending RM = 25% of next month’s production requirements.'
      ]
    },
    trap: 'Do not build each budget independently. A master budget is linked: sales assumptions affect production, production affects materials/labour/overhead, and those flow into cash and the financial statements.',
    check: ['Can I explain why the sales budget comes first?', 'Can I derive the production-budget equation logically?', 'Can I explain how one assumption flows through several budgets?', 'Can I define responsibility accounting in plain English?'],
    sources: 'Module 9 Master Budget & Responsibility Accounting slides · Additional Questions AQ-15/AQ-16 · unit-outline tutorial questions 6-3, 6-15, 6-23, 6-34'
  }
};

const ecomLessons = {
  ecom1: {
    purpose: 'Business analytics is not “doing Excel for the sake of Excel”. It is using data and quantitative tools to support a business decision.',
    diagram: ['business question', 'data', 'analyse', 'interpret', 'communicate', 'decision'],
    sections: [['three broad analytics questions', ['<b>Descriptive</b>: what happened?', '<b>Predictive</b>: what is likely to happen?', '<b>Prescriptive</b>: what should we do?']], ['study habit', ['Before using a formula, write down the business question and what the result would mean. The calculation is only useful if you can explain the decision it informs.']]],
    example: { title:'simple example', lines:['Sales fell last month → descriptive analysis identifies where.', 'A model estimates next month’s sales → predictive.', 'A decision model recommends inventory levels → prescriptive.'] },
    trap:'Do not confuse a technically correct output with a useful business answer. You still have to interpret it.',
    check:['Can I tell descriptive / predictive / prescriptive apart?', 'Can I state the business question before opening Excel?'],
    sources:'Module 1 + Welcome Lab'
  },
  ecom2: {
    purpose:'Good analysis starts with data arranged consistently. Tables, sorting and filtering are the basic tools that make later formulas, PivotTables and charts reliable.',
    diagram:['rows = records', 'columns = fields', 'table structure', 'sort / filter', 'inspect the relevant subset'],
    sections:[['data structure',['A <b>record</b> is one row/item; a <b>field</b> is one attribute/column. Consistent headers and data types matter because later tools rely on that structure.']],['sorting and filtering',['Sorting changes order; filtering temporarily shows only records meeting conditions. Neither should be confused with changing the underlying meaning of the data.']]],
    example:{title:'why this matters',lines:['If a transaction table has one row per sale, you can filter a region, sort largest-to-smallest and inspect the important observations without manually copying data.']},
    trap:'Do not sort one column by itself and detach it from the other columns in the record.',
    check:['Can I identify record vs field?', 'Can I explain sort vs filter?'], sources:'Module 2 + Lab exercises'
  },
  ecom3: {
    purpose:'Database analytics uses formulas and criteria to retrieve or calculate answers from a larger dataset instead of manually scanning it.',
    diagram:['question', 'criteria', 'function / lookup', 'matching records', 'answer'],
    sections:[['logic',['<b>IF</b> returns different results depending on whether a condition is true or false.']],['lookups',['Lookup tools match a key to another value in a table. The important part is knowing what key is being matched and what field you are returning.']],['database functions',['Database-style functions calculate over records that meet specified criteria.']]],
    example:{title:'applied thinking',lines:['Instead of reading 5,000 rows to find a customer category, use a lookup based on customer ID; instead of manually counting eligible rows, define the criterion and let the function calculate consistently.']},
    trap:'A formula can return a plausible number even when the lookup key or criteria range is wrong. Always inspect a few records manually as a reasonableness check.',
    check:['Can I explain what IF is deciding?', 'Can I identify lookup key and return field?', 'Can I state the criterion in words before writing the formula?'], sources:'Module 3 + Lab exercises'
  },
  ecom4: {
    purpose:'This topic describes a dataset: where values sit, how often they occur and what a typical value looks like.',
    diagram:['raw observations', 'frequency / distribution', 'position', 'centre', 'interpret the pattern'],
    sections:[['frequency and distribution',['<b>Frequency</b> counts how often values/categories occur. A frequency distribution or histogram makes the overall shape visible.']],['percentiles',['A percentile describes relative position in the ordered data.']],['mean / median / mode',['<b>Mean</b> uses all values, <b>median</b> is the middle ordered value, and <b>mode</b> is the most frequent. Different measures can tell different stories when data are skewed or contain unusual values.']]],
    example:{title:'choosing a centre',lines:['If a few extremely large values pull the average upward, the median can represent the “typical middle” more clearly than the mean.']},
    trap:'Do not report an average without asking what the distribution looks like.',
    check:['Can I explain percentile as position?', 'Can I decide when median may be more informative than mean?'], sources:'Module 4 + Lab 4 material'
  },
  ecom5: {
    purpose:'Measures of association ask whether two variables move together and how strong that relationship appears to be.',
    diagram:['two variables', 'visualise', 'measure association', 'check outliers', 'interpret — do not overclaim'],
    sections:[['variance / covariance / correlation',['Variance describes spread. Covariance indicates direction of joint movement. Correlation standardises that association so its direction and strength are easier to compare.']],['outliers',['An outlier can materially change the calculated relationship, so it should be investigated rather than automatically deleted.']]],
    example:{title:'interpretation',lines:['A strong positive correlation means larger values of one variable tend to occur with larger values of the other. It does <b>not</b> by itself prove one variable caused the other.']},
    trap:'Correlation is association, not automatic causation.',
    check:['Can I distinguish covariance from correlation?', 'Can I explain why an outlier matters?', 'Can I avoid causal wording when the analysis only supports association?'], sources:'Module 5 + Lab 5 material'
  },
  ecomPrep: {
    purpose:'This block is assessment preparation rather than a normal content module. The goal is to connect the analytical techniques to the Business Report and Individual Excel Model requirements.',
    diagram:['read assessment requirement', 'identify required analysis', 'build model', 'check output', 'explain result in report'],
    sections:[['workflow',['Use the assessment recording/guidelines to identify exactly what outputs are required before building the workbook. Keep calculations reproducible and separate raw data, analysis and presentation where practical.']]],
    example:{title:'assessment habit',lines:['For each required output, write: “question being answered → Excel method → output → sentence explaining what it means.”']},
    trap:'Do not build a sophisticated model that does not answer the actual assessment requirement.',
    check:['Have I mapped every assessment requirement to an output?', 'Can I explain every table/chart I include?'], sources:'Assessment-preparation recording/material'
  },
  ecom6: {
    purpose:'Data visualisation is choosing a visual that makes the relevant pattern easy to see without distorting it. This topic also contains the Assessment 2 Q&A session.',
    diagram:['question', 'data type', 'choose chart', 'remove clutter', 'label clearly', 'interpret'],
    sections:[['chart choice',['Choose a chart because it answers the question, not because it looks impressive. Different visuals suit comparisons, distributions, relationships and trends.']],['communication',['Titles, axes, units and scale should make the chart interpretable without forcing the reader to guess.']]],
    example:{title:'quick logic',lines:['Trend over time → time-series/line style visual is often natural.', 'Relationship between two numeric variables → a scatter-style visual can reveal pattern/outliers.']},
    trap:'A chart can be mathematically correct and still misleading if the scale, labels or comparison basis distort the message.',
    check:['Can I say why this chart type fits the question?', 'Can someone understand the chart without reading my mind?'], sources:'Module 6 + Lab 6 + Assessment 2 Q&A'
  },
  ecom7: {
    purpose:'PivotTables summarise large datasets by grouping fields and applying calculations without rewriting the source table.',
    diagram:['source table', 'rows / columns / filters', 'values aggregation', 'PivotTable summary', 'PivotChart / interpretation'],
    sections:[['pivot logic',['Decide what categories should define rows/columns and what numeric field should be summarised. The Values area then uses sum, count, average or another aggregation.']],['refresh',['If the source data changes, a PivotTable may need to be refreshed so the summary reflects the latest data.']]],
    example:{title:'business use',lines:['Group sales by region in Rows, product category in Columns and revenue in Values to see where revenue is concentrated.']},
    trap:'A “sum” and a “count” answer completely different questions. Check the aggregation Excel chose automatically.',
    check:['Can I identify row, column and value fields?', 'Can I explain what one PivotTable cell represents?'], sources:'Module 7 + Lab material'
  },
  ecom8: {
    purpose:'Forecasting/regression use patterns in data to estimate relationships and future values. The model is only useful when its assumptions and fit are interpreted, not merely calculated.',
    diagram:['historical data', 'identify pattern', 'fit model', 'evaluate fit', 'forecast', 'communicate uncertainty'],
    sections:[['regression',['Regression estimates how a dependent variable changes with one or more predictors. Coefficients need to be interpreted in the units/context of the data.']],['time series',['Time-series data are ordered through time; trend and other time structure matter when forecasting.']]],
    example:{title:'interpret before forecasting',lines:['If a regression coefficient says sales rise as advertising rises, explain the estimated change in sales for a one-unit change in advertising and then ask whether that relationship is credible and stable enough to forecast.']},
    trap:'A fitted line is not automatically a good forecast outside the observed data range.',
    check:['Can I identify dependent vs independent variable?', 'Can I interpret a coefficient in context?', 'Can I explain why extrapolation can be risky?'], sources:'Module 8 + Lab 8 material'
  },
  ecom9: {
    purpose:'Statistical inference uses sample evidence to make a reasoned statement about a wider population while explicitly dealing with uncertainty.',
    diagram:['population question', 'sample', 'sample statistic', 'uncertainty', 'inference about population'],
    sections:[['sample vs population',['The population is the full group of interest; the sample is the subset observed. A sample statistic is used to learn about a population parameter.']],['uncertainty',['Sampling means results vary from sample to sample, so inference must account for uncertainty rather than pretending the sample result is exact for the population.']]],
    example:{title:'business question',lines:['A company may sample customer response times rather than observe every possible transaction, then use the sample to assess whether the broader process meets a performance target.']},
    trap:'Do not write “the population is exactly…” when your evidence only supports an estimate/inference.',
    check:['Can I identify the population and sample?', 'Can I explain why uncertainty exists?'], sources:'Module 9 · CadSoft case · Lab 9 material'
  },
  ecom10: {
    purpose:'Data governance and ethics ask whether data are controlled, used and communicated responsibly — not merely whether the analysis is technically correct.',
    diagram:['collect', 'store / control access', 'analyse', 'share / report', 'retain / dispose', 'accountability at every step'],
    sections:[['governance',['Governance means having clear rules, ownership/responsibility, access controls and processes around data.']],['ethics',['Ethical questions include whether collection/use is fair, whether people could be harmed, whether analysis is misleading and whether the organisation is using data for a purpose that can be justified.']]],
    example:{title:'case mindset',lines:['When reading a governance/ethics case, identify stakeholders, what data are involved, who has access/control, the possible harm and what a responsible alternative would look like.']},
    trap:'“We are technically allowed to do it” does not automatically settle the ethical question.',
    check:['Can I identify the stakeholder harmed or benefited?', 'Can I separate security/privacy/governance issues from analytical issues?'], sources:'Module 10 + Data Governance & Ethics cases/material'
  }
};

const lessonData = { ...acctLessons, ...ecomLessons };

function lEsc(value='') {
  return String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[ch]));
}

function renderConceptMap(items=[]) {
  return `<div class="concept-map">${items.map((item,i)=>`${i?'<span class="map-arrow">→</span>':''}<span class="map-node">${lEsc(item)}</span>`).join('')}</div>`;
}

function renderLessonBody(unit, topic, lesson) {
  if (!lesson) {
    return `<div class="lesson-pending"><strong>full lesson waiting on source pack.</strong><p>I have the outline-level map for this topic, but I am not going to invent a detailed lesson without the actual lecture/tutorial material. Once those files arrive, this card will expand into the same teaching format as ACCT/ECOM.</p></div>`;
  }

  return `
    <div class="lesson-body">
      <section class="lesson-intro">
        <div class="lesson-label">start here · what are we actually doing?</div>
        <p>${lesson.purpose}</p>
      </section>

      <section class="lesson-block">
        <div class="lesson-label">picture the logic</div>
        ${renderConceptMap(lesson.diagram)}
      </section>

      <section class="lesson-block">
        <div class="lesson-label">learn it</div>
        <div class="lesson-sections">
          ${lesson.sections.map(([title, paras])=>`
            <article class="lesson-section-card">
              <h4>${lEsc(title)}</h4>
              ${paras.map(p=>`<p>${p}</p>`).join('')}
            </article>`).join('')}
        </div>
      </section>

      <section class="worked-example">
        <div class="lesson-label">worked / applied example</div>
        <h4>${lEsc(lesson.example.title)}</h4>
        <ol>${lesson.example.lines.map(x=>`<li>${x}</li>`).join('')}</ol>
      </section>

      <section class="lesson-trap"><strong>watch for this:</strong> ${lesson.trap}</section>

      <section class="lesson-block">
        <div class="lesson-label">before you tick “understood”</div>
        <div class="self-check-list">${lesson.check.map(x=>`<label><input type="checkbox" data-local-selfcheck="${unit.id}:${topic.id}:${lEsc(x)}"> <span>${lEsc(x)}</span></label>`).join('')}</div>
      </section>

      <section class="lesson-source"><span>source trail</span><strong>${lEsc(lesson.sources)}</strong></section>
    </div>`;
}

function renderLearningTopic(unit, topic) {
  const week = semesterWeeks.find(w=>w.week===topic.week);
  const current = getCurrentWeek()?.week === topic.week;
  const lesson = lessonData[topic.id];
  return `
    <article class="topic-card learning-card ${current?'current':''}" style="--unit-accent:${unit.accent}">
      <div class="topic-top">
        <div>
          <div class="topic-date">${week ? `${week.dates} · Week ${week.week}` : `Week ${topic.week}`}${current?' · YOU ARE HERE':''}</div>
          <h3 class="topic-title">${lEsc(topic.title)}</h3>
        </div>
        <span class="lesson-status ${lesson?'ready':'pending'}">${lesson?'lesson ready':'source pack pending'}</span>
      </div>

      <p class="topic-summary"><b>plain-English first:</b> ${lEsc(topic.plain)}</p>

      <details class="lesson-details" ${current && lesson ? 'open' : ''}>
        <summary>${lesson ? 'open actual lesson' : 'see what is available'} <span>⌄</span></summary>
        ${renderLessonBody(unit, topic, lesson)}
      </details>

      <div class="study-flow">
        ${steps.map(([step,label])=>{
          const key = topicKey(unit.id, topic.id, step);
          const checked = store.get(key);
          return `<label class="check-chip"><input type="checkbox" data-topic-check="${key}" ${checked?'checked':''}> ${lEsc(label)}</label>`;
        }).join('')}
      </div>
      <div class="source-line"><span>${lEsc(topic.source)}</span><span class="source-state ${topic.received?'':'pending'}">${topic.received?'source received':'more files needed'}</span></div>
    </article>`;
}

// Replace the tracker-first unit view from app.js with a lesson-first learning view.
renderUnits = function(filter = 'all') {
  const targetUnits = filter === 'all' ? units : units.filter(u => u.id === filter);
  $('#view-units').innerHTML = `
    <div class="section-head"><div><h2>lessons first. tracker second.</h2><p>Open a topic and actually learn it: plain language → visual map → lesson → example → self-check → official source trail.</p></div></div>
    <div class="filters">${[{id:'all',label:'all units'},...units.map(u=>({id:u.id,label:u.code}))].map(f=>`<button class="filter-button ${f.id===filter?'active':''}" data-unit-filter="${f.id}">${f.label}</button>`).join('')}</div>
    ${targetUnits.map(unit => {
      const overview = unitOverviews[unit.id];
      const progress = unitProgress(unit);
      return `<section class="learning-unit" style="--unit-accent:${unit.accent}">
        <div class="learning-unit-head">
          <div><div class="unit-code">${unit.code}</div><h2>${lEsc(unit.name)}</h2></div>
          <div class="learning-progress"><span>${progress.done}/${progress.total} study steps</span><div class="progress-bar"><div class="progress-fill" style="width:${progress.pct}%"></div></div></div>
        </div>
        <div class="unit-overview">
          <div><div class="lesson-label">before topic 1</div><h3>${lEsc(overview.heading)}</h3><p>${lEsc(overview.body)}</p></div>
          ${renderConceptMap(overview.map)}
        </div>
        <div class="attendance-callout"><b>class strategy:</b> ${lEsc(unit.attendance)}</div>
        <div class="topic-stack">${unit.topics.map(topic=>renderLearningTopic(unit,topic)).join('')}</div>
      </section>`;
    }).join('')}`;
  restoreLessonSelfChecks();
};

function restoreLessonSelfChecks() {
  document.querySelectorAll('[data-local-selfcheck]').forEach(input => {
    const key = `imstudying:selfcheck:${input.dataset.localSelfcheck}`;
    input.checked = localStorage.getItem(key) === '1';
  });
}

document.addEventListener('change', e => {
  if (e.target.matches('[data-local-selfcheck]')) {
    const key = `imstudying:selfcheck:${e.target.dataset.localSelfcheck}`;
    localStorage.setItem(key, e.target.checked ? '1' : '0');
  }
});

// Make the existing navigation accurately describe what this screen now is.
const unitNav = document.querySelector('.nav-item[data-view="units"]');
if (unitNav) unitNav.innerHTML = '<span>◫</span> lessons';

// app.js rendered the old unit screen during init; replace it immediately.
renderUnits();
