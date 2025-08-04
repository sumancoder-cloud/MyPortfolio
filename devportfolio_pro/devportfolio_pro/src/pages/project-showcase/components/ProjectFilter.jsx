import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectFilter = ({ 
  categories, 
  selectedCategory, 
  onCategoryChange, 
  techFilters, 
  selectedTech, 
  onTechChange,
  sortBy,
  onSortChange,
  searchQuery,
  onSearchChange
}) => {
  const sortOptions = [
    { value: 'recent', label: 'Most Recent', icon: 'Clock' },
    { value: 'popular', label: 'Most Popular', icon: 'Star' },
    { value: 'complex', label: 'Most Complex', icon: 'Zap' },
    { value: 'impact', label: 'Highest Impact', icon: 'TrendingUp' }
  ];

  return (
    <div className="glass-card p-6 mb-8">
      {/* Search Bar */}
      <div className="relative mb-6">
        <Icon 
          name="Search" 
          size={20} 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" 
        />
        <input
          type="text"
          placeholder="Search projects..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e?.target?.value)}
          className="w-full pl-10 pr-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Categories */}
        <div>
          <h4 className="text-sm font-medium text-foreground mb-3 flex items-center">
            <Icon name="Folder" size={16} className="mr-2" />
            Categories
          </h4>
          <div className="flex flex-wrap gap-2">
            {categories?.map((category) => (
              <Button
                key={category?.value}
                variant={selectedCategory === category?.value ? "default" : "ghost"}
                size="sm"
                onClick={() => onCategoryChange(category?.value)}
                className={selectedCategory === category?.value ? "btn-primary" : ""}
              >
                {category?.label}
                <span className="ml-2 text-xs opacity-70">({category?.count})</span>
              </Button>
            ))}
          </div>
        </div>

        {/* Tech Stack Filter */}
        <div>
          <h4 className="text-sm font-medium text-foreground mb-3 flex items-center">
            <Icon name="Code" size={16} className="mr-2" />
            Technologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {techFilters?.map((tech) => (
              <Button
                key={tech}
                variant={selectedTech?.includes(tech) ? "default" : "outline"}
                size="sm"
                onClick={() => onTechChange(tech)}
                className={selectedTech?.includes(tech) ? "btn-secondary" : ""}
              >
                {tech}
              </Button>
            ))}
          </div>
        </div>

        {/* Sort Options */}
        <div>
          <h4 className="text-sm font-medium text-foreground mb-3 flex items-center">
            <Icon name="ArrowUpDown" size={16} className="mr-2" />
            Sort By
          </h4>
          <div className="flex flex-wrap gap-2">
            {sortOptions?.map((option) => (
              <Button
                key={option?.value}
                variant={sortBy === option?.value ? "default" : "ghost"}
                size="sm"
                onClick={() => onSortChange(option?.value)}
                iconName={option?.icon}
                iconPosition="left"
                iconSize={14}
                className={sortBy === option?.value ? "btn-conversion" : ""}
              >
                {option?.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
      {/* Active Filters */}
      {(selectedCategory !== 'all' || selectedTech?.length > 0 || searchQuery) && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 pt-4 border-t border-border"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">Active filters:</span>
              {selectedCategory !== 'all' && (
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md border border-primary/20">
                  {categories?.find(c => c?.value === selectedCategory)?.label}
                </span>
              )}
              {selectedTech?.map((tech) => (
                <span key={tech} className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-md border border-secondary/20">
                  {tech}
                </span>
              ))}
              {searchQuery && (
                <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-md border border-accent/20">
                  "{searchQuery}"
                </span>
              )}
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                onCategoryChange('all');
                onTechChange([]);
                onSearchChange('');
              }}
              iconName="X"
              iconPosition="left"
              iconSize={14}
            >
              Clear All
            </Button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ProjectFilter;