import React, { useState, useMemo } from 'react';
import { menuData } from '../data/menuData';
import { DietaryFilter } from '../types';
import { MenuHeader } from '../components/sections/menu/MenuHeader';
import { MenuCategoryNav } from '../components/sections/menu/MenuCategoryNav';
import { MenuTabs } from '../components/sections/menu/MenuTabs';
import { DishGrid } from '../components/sections/menu/DishGrid';
import { MenuFeature } from '../components/sections/menu/MenuFeature';

const Menu: React.FC = () => {
  const categories = useMemo(() => Object.keys(menuData), []);
  const [activeFilter, setActiveFilter] = useState<DietaryFilter>('All');
  const [activeCategory, setActiveCategory] = useState<string>(categories[0] || '');

  return (
    <main className="bg-bg-base min-h-screen">
      <MenuHeader />
      <MenuCategoryNav activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
      <MenuTabs activeTab={activeFilter} onTabChange={setActiveFilter} />
      <DishGrid menuData={menuData} activeFilter={activeFilter} activeCategory={activeCategory} />
      <MenuFeature />
    </main>
  );
};

export default Menu;
