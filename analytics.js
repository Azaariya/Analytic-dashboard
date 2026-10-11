function App() {

  const [activeSection, setActiveSection] =
    React.useState("dashboard");

  const [searchTerm, setSearchTerm] =
    React.useState("");

  // Dark Mode with LocalStorage
  const [darkMode, setDarkMode] = React.useState(() => {
    const saved = localStorage.getItem("nexus_dark_mode");
    return saved ? JSON.parse(saved) : false;
  });

  React.useEffect(() => {
    localStorage.setItem("nexus_dark_mode", JSON.stringify(darkMode));
  }, [darkMode]);

  // Profile Information with LocalStorage
  const [profile, setProfile] = React.useState(() => {
    const saved = localStorage.getItem("nexus_profile");
    return saved ? JSON.parse(saved) : { name: "Azariya", email: "azariya@example.com" };
  });

  React.useEffect(() => {
    localStorage.setItem("nexus_profile", JSON.stringify(profile));
  }, [profile]);

  const [showTransactionForm, setShowTransactionForm] =
    React.useState(false);

  const [showAccountForm, setShowAccountForm] =
    React.useState(false);

  const [showBudgetForm, setShowBudgetForm] =
    React.useState(false);

  const [showInvestmentForm, setShowInvestmentForm] =
    React.useState(false);

  // Savings Goal with LocalStorage
  const [savingsGoal, setSavingsGoal] = React.useState(() => {
    const saved = localStorage.getItem("nexus_savings_goal");
    return saved ? JSON.parse(saved) : 10000;
  });

  React.useEffect(() => {
    localStorage.setItem("nexus_savings_goal", JSON.stringify(savingsGoal));
  }, [savingsGoal]);

  // Transactions with LocalStorage
  const [transactions, setTransactions] = React.useState(() => {
    const saved = localStorage.getItem("nexus_transactions");
    return saved ? JSON.parse(saved) : [
      {
        id: 1,
        description: "Monthly Salary",
        amount: 5000,
        type: "income",
        category: "Salary",
        date: "August 1"
      },
      {
        id: 2,
        description: "Apartment Rent",
        amount: 1200,
        type: "expense",
        category: "Housing",
        date: "August 2"
      },
      {
        id: 3,
        description: "Grocery Shopping",
        amount: 380,
        type: "expense",
        category: "Food",
        date: "August 4"
      },
      {
        id: 4,
        description: "Freelance Project",
        amount: 1500,
        type: "income",
        category: "Freelance",
        date: "August 6"
      },
      {
        id: 5,
        description: "Electricity Bill",
        amount: 150,
        type: "expense",
        category: "Bills",
        date: "August 8"
      },
      {
        id: 6,
        description: "Restaurant",
        amount: 85,
        type: "expense",
        category: "Food",
        date: "August 10"
      },
      {
        id: 7,
        description: "Uber",
        amount: 45,
        type: "expense",
        category: "Transportation",
        date: "August 12"
      },
      {
        id: 8,
        description: "Online Course",
        amount: 200,
        type: "expense",
        category: "Education",
        date: "August 15"
      },
      {
        id: 9,
        description: "Stock Dividend",
        amount: 320,
        type: "income",
        category: "Investment",
        date: "August 20"
      },
      {
        id: 10,
        description: "New Headphones",
        amount: 180,
        type: "expense",
        category: "Shopping",
        date: "August 22"
      }
    ];
  });

  React.useEffect(() => {
    localStorage.setItem("nexus_transactions", JSON.stringify(transactions));
  }, [transactions]);

  // Accounts with LocalStorage
  const [accounts, setAccounts] = React.useState(() => {
    const saved = localStorage.getItem("nexus_accounts");
    return saved ? JSON.parse(saved) : [
      {
        id: 1,
        name: "Checking Account",
        number: "•••• 4821",
        balance: 18450,
        icon: "🏦"
      },
      {
        id: 2,
        name: "Savings Account",
        number: "•••• 7294",
        balance: 5230,
        icon: "💰"
      },
      {
        id: 3,
        name: "Credit Card",
        number: "•••• 1938",
        balance: -420,
        icon: "💳"
      }
    ];
  });

  React.useEffect(() => {
    localStorage.setItem("nexus_accounts", JSON.stringify(accounts));
  }, [accounts]);

  // Budgets with LocalStorage
  const [budgets, setBudgets] = React.useState(() => {
    const saved = localStorage.getItem("nexus_budgets");
    return saved ? JSON.parse(saved) : [
      {
        id: 1,
        category: "Food",
        spent: 465,
        limit: 500,
        icon: "🍔"
      },
      {
        id: 2,
        category: "Shopping",
        spent: 180,
        limit: 300,
        icon: "🛍️"
      },
      {
        id: 3,
        category: "Transportation",
        spent: 45,
        limit: 250,
        icon: "🚗"
      },
      {
        id: 4,
        category: "Entertainment",
        spent: 80,
        limit: 200,
        icon: "🎮"
      },
      {
        id: 5,
        category: "Education",
        spent: 200,
        limit: 300,
        icon: "📚"
      }
    ];
  });

  React.useEffect(() => {
    localStorage.setItem("nexus_budgets", JSON.stringify(budgets));
  }, [budgets]);

  // Investments with LocalStorage
  const [investments, setInvestments] = React.useState(() => {
    const saved = localStorage.getItem("nexus_investments");
    return saved ? JSON.parse(saved) : [
      {
        id: 1,
        name: "Technology ETF",
        symbol: "TECH",
        value: 4200,
        change: 8.2,
        sparkline: [3500, 3650, 3800, 3750, 3950, 4100, 4200]
      },
      {
        id: 2,
        name: "Index Fund",
        symbol: "S&P 500",
        value: 3800,
        change: 6.4,
        sparkline: [3200, 3300, 3450, 3400, 3600, 3700, 3800]
      },
      {
        id: 3,
        name: "Government Bonds",
        symbol: "BOND",
        value: 2500,
        change: 3.1,
        sparkline: [2350, 2380, 2410, 2400, 2450, 2480, 2500]
      }
    ];
  });

  React.useEffect(() => {
    localStorage.setItem("nexus_investments", JSON.stringify(investments));
  }, [investments]);


  const balanceData = [
    { month: "Jan 1", balance: 18200 },
    { month: "Jan 8", balance: 18900 },
    { month: "Jan 15", balance: 19500 },
    { month: "Jan 22", balance: 20100 },
    { month: "Feb 1", balance: 21300 },
    { month: "Feb 8", balance: 20800 },
    { month: "Feb 15", balance: 22100 },
    { month: "Feb 22", balance: 23100 },
    { month: "Mar 1", balance: 22400 },
    { month: "Mar 8", balance: 23500 },
    { month: "Mar 15", balance: 24000 },
    { month: "Mar 22", balance: 24580 }
  ];


  function handleNavigation(section) {
    setActiveSection(section);
  }


  function addTransaction(transaction) {
    const newTransaction = {
      ...transaction,
      id: Date.now()
    };
    setTransactions(prev => [...prev, newTransaction]);
    setShowTransactionForm(false);
  }


  function addAccount(account) {
    const newAccount = {
      ...account,
      id: Date.now()
    };
    setAccounts(prev => [...prev, newAccount]);
    setShowAccountForm(false);
  }


  function addBudget(budget) {
    const newBudget = {
      ...budget,
      id: Date.now()
    };
    setBudgets(prev => [...prev, newBudget]);
    setShowBudgetForm(false);
  }


  function addInvestment(investment) {
    const newInvestment = {
      ...investment,
      id: Date.now(),
      sparkline: [investment.value * 0.9, investment.value * 0.95, investment.value]
    };
    setInvestments(prev => [...prev, newInvestment]);
    setShowInvestmentForm(false);
  }


  function renderContent() {
    switch (activeSection) {
      case "dashboard":
        return (
          <Dashboard
            balanceData={balanceData}
            transactions={transactions}
            savingsGoal={savingsGoal}
            setSavingsGoal={setSavingsGoal}
            searchTerm={searchTerm}
            onAddTransaction={() => setShowTransactionForm(true)}
          />
        );
      case "analytics":
        return (
          <AnalyticsPage
            balanceData={balanceData}
            transactions={transactions}
          />
        );
      case "transactions":
        return (
          <TransactionsPage
            transactions={transactions}
            searchTerm={searchTerm}
            onAddTransaction={() => setShowTransactionForm(true)}
          />
        );
      case "accounts":
        return (
          <Accounts
            accounts={accounts}
            onAddAccount={() => setShowAccountForm(true)}
          />
        );
      case "budgets":
        return (
          <Budgets
            budgets={budgets}
            onAddBudget={() => setShowBudgetForm(true)}
          />
        );
      case "investments":
        return (
          <Investments
            investments={investments}
            onAddInvestment={() => setShowInvestmentForm(true)}
          />
        );
      case "settings":
        return (
          <Settings
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            profile={profile}
            setProfile={setProfile}
          />
        );
      default:
        return null;
    }
  }


  return (
    <div className={`app-shell ${darkMode ? "dark-mode" : ""}`}>
      <Sidebar
        activeSection={activeSection}
        onNavigate={handleNavigation}
        profile={profile}
      />

      <div className="main-area">
        <Header
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          profile={profile}
        />

        <main className="main-content">
          {renderContent()}
        </main>
      </div>

      {showTransactionForm && (
        <TransactionModal
          onClose={() => setShowTransactionForm(false)}
          onAdd={addTransaction}
        />
      )}

      {showAccountForm && (
        <AccountModal
          onClose={() => setShowAccountForm(false)}
          onAdd={addAccount}
        />
      )}

      {showBudgetForm && (
        <BudgetModal
          onClose={() => setShowBudgetForm(false)}
          onAdd={addBudget}
        />
      )}

      {showInvestmentForm && (
        <InvestmentModal
          onClose={() => setShowInvestmentForm(false)}
          onAdd={addInvestment}
        />
      )}
    </div>
  );
}


/* =========================
   SIDEBAR
========================= */

function Sidebar({ activeSection, onNavigate, profile }) {
  const menuItems = [
    { id: "dashboard", icon: "🏠", label: "Dashboard" },
    { id: "analytics", icon: "📊", label: "Analytics" },
    { id: "transactions", icon: "💳", label: "Transactions" },
    { id: "accounts", icon: "🏦", label: "Accounts" },
    { id: "budgets", icon: "🎯", label: "Budgets" },
    { id: "investments", icon: "📈", label: "Investments" }
  ];

  const firstLetter = profile.name ? profile.name.charAt(0).toUpperCase() : "A";

  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-icon">NX</div>
        <div>
          <h2>Nexus</h2>
          <p>Wealth Management</p>
        </div>
      </div>

      <nav className="sidebar-nav">
        <p className="nav-title">MAIN MENU</p>
        {menuItems.map(item => (
          <button
            key={item.id}
            className={`nav-item ${activeSection === item.id ? "active" : ""}`}
            onClick={() => onNavigate(item.id)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}

        <p className="nav-title settings-title">PREFERENCES</p>
        <button
          className={`nav-item ${activeSection === "settings" ? "active" : ""}`}
          onClick={() => onNavigate("settings")}
        >
          <span className="nav-icon">⚙️</span>
          Settings
        </button>
      </nav>

      <div className="sidebar-bottom">
        <div className="profile-card">
          <div className="profile-avatar">{firstLetter}</div>
          <div className="profile-info">
            <strong>{profile.name}</strong>
            <span>Administrator</span>
          </div>
        </div>
        <button
          className="logout-button"
          onClick={() => alert("Session active and secured.")}
        >
          🔒 Lock Session
        </button>
      </div>
    </aside>
  );
}


/* =========================
   HEADER
========================= */

function Header({ searchTerm, setSearchTerm, profile }) {
  const firstLetter = profile.name ? profile.name.charAt(0).toUpperCase() : "A";

  return (
    <header className="header">
      <div className="header-left">
        <h1>Welcome back, {profile.name}</h1>
        <p>Here is your comprehensive financial overview for today.</p>
      </div>

      <div className="header-right">
        <div className="search-box">
          <span>🔍</span>
          <input
            type="text"
            placeholder="Search transactions..."
            value={searchTerm}
            onChange={event => setSearchTerm(event.target.value)}
          />
        </div>

        <button
          className="header-button"
          onClick={() => alert("All systems synchronized.")}
          title="Notifications"
        >
          🔔
        </button>

        <button className="header-avatar" title={profile.name}>
          {firstLetter}
        </button>
      </div>
    </header>
  );
}


/* =========================
   DASHBOARD
========================= */

function Dashboard({
  balanceData,
  transactions,
  savingsGoal,
  setSavingsGoal,
  searchTerm,
  onAddTransaction
}) {
  const totalIncome = transactions
    .filter(t => t.type === "income")
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const totalExpense = transactions
    .filter(t => t.type === "expense")
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const totalSavings = totalIncome - totalExpense;
  const currentBalance = balanceData[balanceData.length - 1].balance;

  return (
    <div className="page">
      <div className="page-heading">
        <div>
          <h2>Dashboard</h2>
          <p>Real-time financial tracking and metrics</p>
        </div>
        <button className="primary-button" onClick={onAddTransaction}>
          + Add Transaction
        </button>
      </div>

      <div className="summary-grid">
        <SummaryCard title="Total Balance" value={currentBalance} icon="💰" change="+8.4%" />
        <SummaryCard title="Total Income" value={totalIncome} icon="📥" change="+12.5%" />
        <SummaryCard title="Total Expenses" value={totalExpense} icon="📤" change="-4.2%" />
        <SummaryCard title="Net Savings" value={totalSavings} icon="💵" change="+6.8%" />
      </div>

      <BalanceOverview balanceData={balanceData} />

      <div className="dashboard-grid">
        <SpendingAnalytics transactions={transactions} />
        <SavingsGoal currentSavings={totalSavings} goal={savingsGoal} setGoal={setSavingsGoal} />
      </div>

      <Transactions transactions={transactions} searchTerm={searchTerm} />
    </div>
  );
}


/* =========================
   SUMMARY CARD
========================= */

function SummaryCard({ title, value, icon, change }) {
  const isPositive = change.startsWith("+");
  return (
    <div className="summary-card">
      <div className="summary-top">
        <div className="summary-icon">{icon}</div>
        <span className={`change ${isPositive ? "positive" : "negative"}`}>
          {change}
        </span>
      </div>
      <p className="summary-title">{title}</p>
      <h3>${Number(value).toLocaleString()}</h3>
      <p className="summary-period">Compared to last month</p>
    </div>
  );
}


/* =========================
   BALANCE OVERVIEW (SVG COMBO CHART)
========================= */

function BalanceOverview({ balanceData }) {
  const [selectedPeriod, setSelectedPeriod] = React.useState("30 Days");

  let filteredData;
  if (selectedPeriod === "7 Days") {
    filteredData = balanceData.slice(-4);
  } else if (selectedPeriod === "30 Days") {
    filteredData = balanceData.slice(-8);
  } else if (selectedPeriod === "6 Months") {
    filteredData = balanceData.slice(-10);
  } else {
    filteredData = balanceData;
  }

  const values = filteredData.map(item => item.balance);
  const minVal = Math.min(...values) * 0.98;
  const maxVal = Math.max(...values) * 1.02;
  const range = maxVal - minVal || 1;

  const svgWidth = 800;
  const svgHeight = 240;
  const paddingX = 40;
  const paddingY = 30;

  const points = filteredData.map((item, index) => {
    const x = paddingX + (index / (filteredData.length - 1 || 1)) * (svgWidth - paddingX * 2);
    const y = svgHeight - paddingY - ((item.balance - minVal) / range) * (svgHeight - paddingY * 2);
    return { x, y, ...item };
  });

  const pathD = points.reduce((acc, pt, idx) => (
    idx === 0 ? `M ${pt.x} ${pt.y}` : `${acc} L ${pt.x} ${pt.y}`
  ), "");

  return (
    <div className="card balance-card">
      <div className="card-header">
        <div>
          <h3>Balance Overview</h3>
          <p>Net worth trajectory and cash flow analysis</p>
        </div>
        <div className="period-buttons">
          {["7 Days", "30 Days", "6 Months", "1 Year"].map(period => (
            <button
              key={period}
              className={selectedPeriod === period ? "period-active" : ""}
              onClick={() => setSelectedPeriod(period)}
            >
              {period}
            </button>
          ))}
        </div>
      </div>

      <div className="svg-chart-container">
        <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="analytics-svg-chart">
          <defs>
            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Background Volume Bars */}
          {points.map((pt, idx) => {
            const barWidth = 22;
            const barHeight = svgHeight - paddingY - pt.y;
            return (
              <rect
                key={idx}
                x={pt.x - barWidth / 2}
                y={pt.y}
                width={barWidth}
                height={Math.max(barHeight, 5)}
                rx="4"
                className="chart-bg-bar"
              />
            );
          })}

          {/* Gradient Area Fill */}
          <path
            d={`${pathD} L ${points[points.length - 1].x} ${svgHeight - paddingY} L ${points[0].x} ${svgHeight - paddingY} Z`}
            fill="url(#chartGradient)"
          />

          {/* Line Path */}
          <path
            d={pathD}
            fill="none"
            stroke="#3b82f6"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Data Points and Axis Labels */}
          {points.map((pt, idx) => (
            <g key={idx}>
              <circle
                cx={pt.x}
                cy={pt.y}
                r="5"
                fill="#0f172a"
                stroke="#3b82f6"
                strokeWidth="3"
              />
              <text
                x={pt.x}
                y={svgHeight - 8}
                textAnchor="middle"
                className="chart-axis-label"
              >
                {pt.month}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}


/* =========================
   SPENDING ANALYTICS
========================= */

function SpendingAnalytics({ transactions }) {
  const expenses = transactions.filter(t => t.type === "expense");
  const totalSpending = expenses.reduce((sum, t) => sum + Number(t.amount), 0);
  const categorySpending = expenses.reduce((categories, transaction) => {
    categories[transaction.category] =
      (categories[transaction.category] || 0) + Number(transaction.amount);
    return categories;
  }, {});

  return (
    <div className="card spending-card">
      <div className="card-header">
        <div>
          <h3>Spending Analytics</h3>
          <p>Category breakdown of monthly expenses</p>
        </div>
      </div>

      <div className="total-spending">
        <span>Total Spending</span>
        <strong>${totalSpending.toLocaleString()}</strong>
      </div>

      <div className="category-list">
        {Object.entries(categorySpending).map(([category, amount]) => {
          const percentage = totalSpending === 0 ? 0 : (amount / totalSpending) * 100;
          return (
            <div className="category-item" key={category}>
              <div className="category-info">
                <span>{category}</span>
                <strong>${amount.toLocaleString()}</strong>
              </div>
              <div className="progress-track">
                <div className="progress-bar" style={{ width: `${percentage}%` }}></div>
              </div>
              <span className="category-percentage">{percentage.toFixed(1)}%</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}


/* =========================
   SAVINGS GOAL
========================= */

function SavingsGoal({ currentSavings, goal, setGoal }) {
  const [editingGoal, setEditingGoal] = React.useState(false);
  const [newGoal, setNewGoal] = React.useState(goal);
  const percentage = Math.min((currentSavings / goal) * 100, 100);

  function saveGoal() {
    if (Number(newGoal) > 0) {
      setGoal(Number(newGoal));
      setEditingGoal(false);
    }
  }

  return (
    <div className="card savings-card">
      <div className="card-header">
        <div>
          <h3>Savings Goal</h3>
          <p>Progress toward annual financial target</p>
        </div>
        <span className="goal-icon">🎯</span>
      </div>

      {editingGoal ? (
        <div className="goal-edit" style={{ display: "flex", gap: "10px", marginTop: "24px" }}>
          <input
            type="number"
            value={newGoal}
            onChange={event => setNewGoal(event.target.value)}
            style={{ flex: 1, padding: "8px 12px", borderRadius: "8px", border: "1px solid #cbd5e1" }}
          />
          <button className="primary-button" onClick={saveGoal}>Save</button>
        </div>
      ) : (
        <>
          <div className="savings-amount">
            <strong>${currentSavings.toLocaleString()}</strong>
            <span>of ${goal.toLocaleString()}</span>
          </div>

          <div className="goal-progress">
            <div className="goal-progress-bar" style={{ width: `${percentage}%` }}></div>
          </div>

          <div className="goal-footer">
            <span>{percentage.toFixed(1)}% completed</span>
            <span>${Math.max(goal - currentSavings, 0).toLocaleString()} remaining</span>
          </div>

          <button className="secondary-button" onClick={() => setEditingGoal(true)} style={{ width: "100%" }}>
            Manage Goal
          </button>
        </>
      )}
    </div>
  );
}


/* =========================
   TRANSACTIONS (DASHBOARD WIDGET)
========================= */

function Transactions({ transactions, searchTerm }) {
  const filtered = transactions.filter(t =>
    t.description.toLowerCase().includes((searchTerm || "").toLowerCase()) ||
    t.category.toLowerCase().includes((searchTerm || "").toLowerCase())
  );
  const recentTransactions = filtered.slice(-6).reverse();

  return (
    <div className="card transactions-card" style={{ marginTop: "24px" }}>
      <div className="card-header">
        <div>
          <h3>Recent Transactions</h3>
          <p>Latest ledger activities and settlements</p>
        </div>
      </div>
      <TransactionTable transactions={recentTransactions} />
    </div>
  );
}


/* =========================
   TRANSACTIONS PAGE
========================= */

function TransactionsPage({ transactions, searchTerm, onAddTransaction }) {
  const [typeFilter, setTypeFilter] = React.useState("all");
  const [categoryFilter, setCategoryFilter] = React.useState("all");
  const categories = [...new Set(transactions.map(t => t.category))];

  const filteredTransactions = transactions.filter(transaction => {
    const search =
      transaction.description.toLowerCase().includes((searchTerm || "").toLowerCase()) ||
      transaction.category.toLowerCase().includes((searchTerm || "").toLowerCase());
    const type = typeFilter === "all" || transaction.type === typeFilter;
    const category = categoryFilter === "all" || transaction.category === categoryFilter;
    return search && type && category;
  });

  return (
    <div className="page">
      <div className="page-heading">
        <div>
          <h2>Transactions</h2>
          <p>Detailed ledger history and management</p>
        </div>
        <button className="primary-button" onClick={onAddTransaction}>
          + Add Transaction
        </button>
      </div>

      <div className="filter-bar">
        <div className="filter-group">
          <label>Type</label>
          <select value={typeFilter} onChange={event => setTypeFilter(event.target.value)}>
            <option value="all">All Transactions</option>
            <option value="income">Income</option>
            <option value="expense">Expenses</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Category</label>
          <select value={categoryFilter} onChange={event => setCategoryFilter(event.target.value)}>
            <option value="all">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="card transactions-card">
        <TransactionTable transactions={filteredTransactions} />
      </div>
    </div>
  );
}


/* =========================
   TRANSACTION TABLE
========================= */

function TransactionTable({ transactions }) {
  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Category</th>
            <th>Date</th>
            <th>Type</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.length === 0 ? (
            <tr>
              <td colSpan="5" className="empty-state">No matching transactions found.</td>
            </tr>
          ) : (
            transactions.map(transaction => (
              <tr key={transaction.id}>
                <td>
                  <div className="transaction-name">
                    <div className="transaction-icon">
                      {transaction.type === "income" ? "↓" : "↑"}
                    </div>
                    <strong>{transaction.description}</strong>
                  </div>
                </td>
                <td>
                  <span className="category-badge">{transaction.category}</span>
                </td>
                <td>{transaction.date}</td>
                <td>
                  <span className={transaction.type === "income" ? "type-income" : "type-expense"}>
                    {transaction.type === "income" ? "Income" : "Expense"}
                  </span>
                </td>
                <td>
                  <strong className={transaction.type === "income" ? "amount-income" : "amount-expense"}>
                    {transaction.type === "income" ? "+" : "-"}${Number(transaction.amount).toLocaleString()}
                  </strong>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}


/* =========================
   ANALYTICS PAGE
========================= */

function AnalyticsPage({ balanceData, transactions }) {
  const expenses = transactions.filter(t => t.type === "expense");
  const averageExpense = expenses.length === 0 ? 0 : expenses.reduce((sum, t) => sum + Number(t.amount), 0) / expenses.length;

  return (
    <div className="page">
      <div className="page-heading">
        <div>
          <h2>Financial Analytics</h2>
          <p>In-depth statistical reporting and metrics</p>
        </div>
      </div>

      <BalanceOverview balanceData={balanceData} />

      <div className="analytics-single">
        <SpendingAnalytics transactions={transactions} />
      </div>

      <div className="analytics-stats">
        <div className="stat-box">
          <span>Income Entries</span>
          <strong>{transactions.filter(t => t.type === "income").length}</strong>
        </div>
        <div className="stat-box">
          <span>Expense Entries</span>
          <strong>{expenses.length}</strong>
        </div>
        <div className="stat-box">
          <span>Average Expense</span>
          <strong>${averageExpense.toFixed(2)}</strong>
        </div>
      </div>
    </div>
  );
}


/* =========================
   ACCOUNTS
========================= */

function Accounts({ accounts, onAddAccount }) {
  return (
    <div className="page">
      <div className="page-heading">
        <div>
          <h2>Accounts</h2>
          <p>Linked bank accounts and asset repositories</p>
        </div>
        <button className="primary-button" onClick={onAddAccount}>
          + Add Account
        </button>
      </div>

      <div className="accounts-grid">
        {accounts.map(account => (
          <div className="account-card" key={account.id}>
            <div className="account-top">
              <div className="account-icon">{account.icon}</div>
              <button className="more-button">⋮</button>
            </div>
            <p className="account-name">{account.name}</p>
            <span className="account-number">{account.number}</span>
            <h3 className={account.balance < 0 ? "negative-balance" : ""}>
              ${Math.abs(account.balance).toLocaleString()}
            </h3>
            <span className="account-label">Available balance</span>
          </div>
        ))}
      </div>
    </div>
  );
}


/* =========================
   BUDGETS
========================= */

function Budgets({ budgets, onAddBudget }) {
  return (
    <div className="page">
      <div className="page-heading">
        <div>
          <h2>Budgets</h2>
          <p>Monthly spending limits and threshold controls</p>
        </div>
        <button className="primary-button" onClick={onAddBudget}>
          + Create Budget
        </button>
      </div>

      <div className="budgets-grid">
        {budgets.map(budget => {
          const percentage = budget.limit === 0 ? 0 : (budget.spent / budget.limit) * 100;
          return (
            <div className="budget-card" key={budget.id}>
              <div className="budget-header">
                <div className="budget-category">
                  <div className="budget-icon">{budget.icon}</div>
                  <div>
                    <strong>{budget.category}</strong>
                    <span>Monthly budget</span>
                  </div>
                </div>
                <strong>{percentage.toFixed(0)}%</strong>
              </div>
              <div className="budget-progress">
                <div style={{ width: `${Math.min(percentage, 100)}%` }}></div>
              </div>
              <div className="budget-footer">
                <span>${budget.spent} spent</span>
                <span>${budget.limit} limit</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}


/* =========================
   INVESTMENTS
========================= */

function Investments({ investments, onAddInvestment }) {
  const totalValue = investments.reduce((sum, i) => sum + Number(i.value), 0);

  return (
    <div className="page">
      <div className="page-heading">
        <div>
          <h2>Investments</h2>
          <p>Portfolio holdings and market assets</p>
        </div>
        <button className="primary-button" onClick={onAddInvestment}>
          + Add Investment
        </button>
      </div>

      <div className="investment-summary">
        <span>Total Portfolio Valuation</span>
        <strong>${totalValue.toLocaleString()}</strong>
        <span className="investment-positive">+6.2% overall return YTD</span>
      </div>

      <div className="investments-grid">
        {investments.map(investment => {
          const data = investment.sparkline || [100, 105, 110];
          const min = Math.min(...data);
          const max = Math.max(...data);
          const range = max - min || 1;
          const width = 220;
          const height = 45;
          const points = data.map((val, i) => {
            const x = (i / (data.length - 1 || 1)) * width;
            const y = height - ((val - min) / range) * (height - 10) - 5;
            return `${x},${y}`;
          }).join(" ");

          return (
            <div className="investment-card" key={investment.id}>
              <div className="investment-top">
                <div className="investment-logo">📈</div>
                <div>
                  <strong>{investment.name}</strong>
                  <span>{investment.symbol}</span>
                </div>
              </div>
              <div className="investment-value">
                <strong>${Number(investment.value).toLocaleString()}</strong>
                <span>+{investment.change}%</span>
              </div>
              <div className="sparkline-container">
                <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none">
                  <polyline
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    points={points}
                  />
                </svg>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}


/* =========================
   SETTINGS
========================= */

function Settings({ darkMode, setDarkMode, profile, setProfile }) {
  const [notifications, setNotifications] = React.useState(true);
  const [emailAlerts, setEmailAlerts] = React.useState(true);
  const [editingProfile, setEditingProfile] = React.useState(false);

  const [nameInput, setNameInput] = React.useState(profile.name);
  const [emailInput, setEmailInput] = React.useState(profile.email);

  function saveProfile() {
    if (!nameInput.trim() || !emailInput.trim()) return;
    setProfile({
      name: nameInput.trim(),
      email: emailInput.trim()
    });
    setEditingProfile(false);
  }

  function cancelEdit() {
    setNameInput(profile.name);
    setEmailInput(profile.email);
    setEditingProfile(false);
  }

  return (
    <div className="page">
      <div className="page-heading">
        <div>
          <h2>Settings</h2>
          <p>Configure platform preferences and security</p>
        </div>
      </div>

      <div className="settings-card">
        <div className="settings-section">
          <h3>Profile Information</h3>
          {editingProfile ? (
            <div className="profile-edit-form">
              <label>Full Name</label>
              <input value={nameInput} onChange={e => setNameInput(e.target.value)} />
              <label>Email Address</label>
              <input type="email" value={emailInput} onChange={e => setEmailInput(e.target.value)} />
              <div className="edit-actions">
                <button className="primary-button" onClick={saveProfile}>Save Changes</button>
                <button className="secondary-button" onClick={cancelEdit}>Cancel</button>
              </div>
            </div>
          ) : (
            <>
              <div className="setting-row">
                <div>
                  <strong>Full Name</strong>
                  <span>{profile.name}</span>
                </div>
                <button className="secondary-button" onClick={() => setEditingProfile(true)}>Edit</button>
              </div>
              <div className="setting-row">
                <div>
                  <strong>Email Address</strong>
                  <span>{profile.email}</span>
                </div>
                <button className="secondary-button" onClick={() => setEditingProfile(true)}>Edit</button>
              </div>
            </>
          )}
        </div>

        <div className="settings-section">
          <h3>Appearance</h3>
          <div className="setting-row">
            <div>
              <strong>Dark Mode</strong>
              <span>Toggle high-contrast dark theme across interface</span>
            </div>
            <button
              className={`toggle ${darkMode ? "toggle-on" : ""}`}
              onClick={() => setDarkMode(!darkMode)}
            >
              <span></span>
            </button>
          </div>
        </div>

        <div className="settings-section">
          <h3>Notifications & Alerts</h3>
          <SettingToggle
            title="Push Notifications"
            description="Receive real-time alerts about transactions"
            enabled={notifications}
            setEnabled={setNotifications}
          />
          <SettingToggle
            title="Email Statements"
            description="Receive monthly summary reports and security advisories"
            enabled={emailAlerts}
            setEnabled={setEmailAlerts}
          />
        </div>

        <div className="settings-section danger-section">
          <h3>Security & Authentication</h3>
          <button className="danger-button" onClick={() => alert("Password change protocol initialized.")}>
            Update Master Password
          </button>
        </div>
      </div>
    </div>
  );
}


/* =========================
   SETTING TOGGLE
========================= */

function SettingToggle({ title, description, enabled, setEnabled }) {
  return (
    <div className="setting-row">
      <div>
        <strong>{title}</strong>
        <span>{description}</span>
      </div>
      <button
        className={`toggle ${enabled ? "toggle-on" : ""}`}
        onClick={() => setEnabled(!enabled)}
      >
        <span></span>
      </button>
    </div>
  );
}


/* =========================
   MODALS
========================= */

function TransactionModal({ onClose, onAdd }) {
  const [description, setDescription] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [type, setType] = React.useState("expense");
  const [category, setCategory] = React.useState("Food");

  function handleSubmit(event) {
    event.preventDefault();
    if (!description.trim() || !amount || Number(amount) <= 0) return;
    onAdd({
      description,
      amount: Number(amount),
      type,
      category,
      date: "August 30"
    });
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <div>
            <h3>Add Transaction</h3>
            <p>Record a new financial ledger entry</p>
          </div>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>

        <form onSubmit={handleSubmit}>
          <label>Description</label>
          <input
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="e.g. Grocery Shopping"
          />
          <label>Amount ($)</label>
          <input
            type="number"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            placeholder="0.00"
          />
          <label>Type</label>
          <select value={type} onChange={e => setType(e.target.value)}>
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
          <label>Category</label>
          <select value={category} onChange={e => setCategory(e.target.value)}>
            <option>Food</option>
            <option>Housing</option>
            <option>Bills</option>
            <option>Transportation</option>
            <option>Shopping</option>
            <option>Education</option>
            <option>Entertainment</option>
            <option>Salary</option>
            <option>Freelance</option>
            <option>Investment</option>
            <option>Other</option>
          </select>

          <div className="modal-actions">
            <button type="button" className="secondary-button" onClick={onClose}>Cancel</button>
            <button type="submit" className="primary-button">Add Transaction</button>
          </div>
        </form>
      </div>
    </div>
  );
}


function AccountModal({ onClose, onAdd }) {
  const [name, setName] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [balance, setBalance] = React.useState("");

  function submit(event) {
    event.preventDefault();
    if (!name || !balance) return;
    onAdd({
      name,
      number: number || "•••• 0000",
      balance: Number(balance),
      icon: "🏦"
    });
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <div>
            <h3>Add Account</h3>
            <p>Connect a new financial account</p>
          </div>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        <form onSubmit={submit}>
          <label>Account Name</label>
          <input value={name} onChange={e => setName(e.target.value)} placeholder="e.g. Emergency Fund" />
          <label>Account Number (Last 4)</label>
          <input value={number} onChange={e => setNumber(e.target.value)} placeholder="•••• 1234" />
          <label>Initial Balance ($)</label>
          <input type="number" value={balance} onChange={e => setBalance(e.target.value)} placeholder="0" />
          <div className="modal-actions">
            <button type="button" className="secondary-button" onClick={onClose}>Cancel</button>
            <button className="primary-button" type="submit">Add Account</button>
          </div>
        </form>
      </div>
    </div>
  );
}


function BudgetModal({ onClose, onAdd }) {
  const [category, setCategory] = React.useState("");
  const [limit, setLimit] = React.useState("");

  function submit(event) {
    event.preventDefault();
    if (!category || !limit) return;
    onAdd({
      category,
      spent: 0,
      limit: Number(limit),
      icon: "🎯"
    });
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <div>
            <h3>Create Budget</h3>
            <p>Set a new spending limit category</p>
          </div>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        <form onSubmit={submit}>
          <label>Category Name</label>
          <input value={category} onChange={e => setCategory(e.target.value)} placeholder="e.g. Entertainment" />
          <label>Monthly Limit ($)</label>
          <input type="number" value={limit} onChange={e => setLimit(e.target.value)} placeholder="500" />
          <div className="nav-actions" style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "8px" }}>
            <button type="button" className="secondary-button" onClick={onClose}>Cancel</button>
            <button type="submit" className="primary-button">Create Budget</button>
          </div>
        </form>
      </div>
    </div>
  );
}


function InvestmentModal({ onClose, onAdd }) {
  const [name, setName] = React.useState("");
  const [symbol, setSymbol] = React.useState("");
  const [value, setValue] = React.useState("");

  function submit(event) {
    event.preventDefault();
    if (!name || !value) return;
    onAdd({
      name,
      symbol: symbol || "INV",
      value: Number(value),
      change: 4.5
    });
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <div>
            <h3>Add Investment</h3>
            <p>Add a new asset to your portfolio</p>
          </div>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        <form onSubmit={submit}>
          <label>Investment Name</label>
          <input value={name} onChange={e => setName(e.target.value)} placeholder="e.g. S&P 500 ETF" />
          <label>Ticker Symbol</label>
          <input value={symbol} onChange={e => setSymbol(e.target.value)} placeholder="SPY" />
          <label>Current Value ($)</label>
          <input type="number" value={value} onChange={e => setValue(e.target.value)} placeholder="0" />
          <div className="modal-actions">
            <button type="button" className="secondary-button" onClick={onClose}>Cancel</button>
            <button type="submit" className="primary-button">Add Investment</button>
          </div>
        </form>
      </div>
    </div>
  );
}


ReactDOM.createRoot(
  document.getElementById("root")
).render(<App />);