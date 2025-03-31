export default function Day3() {
    return (
        <>
            <h2>Day 3: Accounting</h2>
            <section>
                <div>
                    <h3>Overview</h3>
                    <ul>
                        <li>Accounting is the language of business</li>
                        <li>Assets = Liabilities + Owners' Equity</li>
                        <li>There are three basic and interdependent financial statements
                            <ul>
                                <li>Balance Sheet</li>
                                <li>Income Statement</li>
                                <li>Cash Flow Statement</li>
                            </ul>
                        </li>
                        <li>Accounting records and statements always balance</li>
                        <li>The statements can be interpreted by using ratios</li>
                        <li>Operating results can be analyzed and managed using variances</li>
                    </ul>
                </div>
                <div>
                    <h3>Types of Accounting</h3>
                    <ul>
                        <li>Cash Basis Accounting: The method of recording transactions only when cash changes hands</li>
                        <li>Accrual Basis Accounting: The method of recording transactions that match revenues and expenses regardless of cash flow movements</li>
                        <li>Managerial Accounting: Uses accounting data to manage and analyze operations; Uses standards, budgets, and variances to run the business and explain operational results</li>
                    </ul>
                </div>
                <div>
                    <h3>Financial Ratios</h3>
                    <p>A method of analyzing statements and comparing them to industry standards</p>
                    <ul>
                    <li>
                        Liquidity measures: How much is on hand that can be converted to cash to pay the bills?
                        <ul>
                        <li>Current Ratio = Current Assets / Current Liabilities</li>
                        </ul>
                    </li>
                    <li>
                        Capitalization measures: Is a company heavily burdened with debt? Are its investors financing the company? How is the company funding itself?
                        <ul>
                        <li>Financial Leverage = (Total Liabilities + Owners' Equity) / OE</li>
                        <li>Long-Term Debt to Capital = Long-Term Debt / (Liabilities + OE)</li>
                        </ul>
                    </li>
                    <li>
                        Activity measures: How actively are the firm's assets being deployed? (MBAs deploy assets, rather than just use them.)
                        <ul>
                        <li>Assets Turnover per Period = Sales / Total Assets</li>
                        <li>Inventory Turns per Period = Cost of Goods Sold / Average Inventory Held During the Period</li>
                        <li>Days Sales in Inventory = Ending Inventory / (Cost of Goods Sold / 365)</li>
                        </ul>
                    </li>
                    <li>
                        Profitability measures: How profitable is a company in relation to the assets and the sales that made its profits possible?
                        <ul>
                        <li>Return on Sales (ROS) = Net Income / Sales</li>
                        <li>Return on Equity (ROE) = Net Income / Owners' Equity</li>
                        </ul>
                    </li>
                    </ul>
                </div>
            </section>
        </>
    );
}