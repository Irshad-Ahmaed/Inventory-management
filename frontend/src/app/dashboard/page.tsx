"use client";

import { CheckCircle, Package, Tag, TrendingDown, TrendingUp } from "lucide-react";
import CardExpenseSummary from "./CardExpenseSummary";
import CardPopularProducts from "./CardPopularProducts";
import CardPurchaseSummary from "./CardPurchaseSummary";
import CardSalesSummary from "./CardSalesSummary";
import StartCard from "./StartCard";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows">
      <CardPopularProducts />
      <CardSalesSummary />
      <CardPurchaseSummary />
      <CardExpenseSummary />
      <StartCard 
        title="Customer & Expenses"
        primaryIcon={<Package className="text-blue-600 w-6 h-6" />}
        dateRange="2 - 9 October 2024"  
        details={[
          {
            title: "Customer Growth",
            amount: "175.00",
            changePercentage: 131,
            IconComponent: TrendingUp
          },
          {
            title: "Expenses",
            amount: "10.00",
            changePercentage: -51,
            IconComponent: TrendingDown
          },
        ]}
      />
      
      <StartCard 
        title="Dues & Pending Orders"
        primaryIcon={<CheckCircle className="text-blue-600 w-6 h-6" />}
        dateRange="2 - 9 October 2024"  
        details={[
          {
            title: "Dues",
            amount: "250.00",
            changePercentage: 86,
            IconComponent: TrendingUp
          },
          {
            title: "Pending Orders",
            amount: "147.00",
            changePercentage: -56,
            IconComponent: TrendingDown
          },
        ]}
      />
      
      <StartCard 
        title="Sales & Discount"
        primaryIcon={<Tag className="text-blue-600 w-6 h-6" />}
        dateRange="2 - 9 October 2024"  
        details={[
          {
            title: "Sales",
            amount: "1005.00",
            changePercentage: 21,
            IconComponent: TrendingUp
          },
          {
            title: "Discount",
            amount: "200.00",
            changePercentage: -10,
            IconComponent: TrendingDown
          },
        ]}
      />
      
    </div>
  );
};

export default Dashboard;
