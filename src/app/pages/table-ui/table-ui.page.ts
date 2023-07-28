import { Component } from '@angular/core';
import { CatdisplayService } from 'src/app/services/catdisplay.service';

@Component({
  selector: 'app-table-ui',
  templateUrl: './table-ui.page.html',
  styleUrls: ['./table-ui.page.scss'],
  
})
export class TableUIPage {
  selectedDataType: string = 'breeds'; // Default selected option
  catBreedsData: any[] = []; // Initialize property to hold cat breeds data
  catFactsData: any[] = []; // Initialize property to hold cat facts data
  filteredData: any[] = []; // Declare the filteredData property
  searchTerm: string = ''; // Declare the searchTerm property

  // Pagination properties
  p: number = 1; // Current page number
  pageSize: number = 10; // Number of items per page

  constructor(private catdisplayService: CatdisplayService) {}

  ngOnInit() {
    this.fetchData(); // Call the fetchData function on component initialization
  }

  fetchData() {
    if (this.selectedDataType === 'breeds') {
      // Fetch cat breeds data
      this.catdisplayService.getCatBreeds().subscribe(data => {
        this.catBreedsData = data.data; // Assign the fetched data to the catBreedsData property
        this.filteredData = this.catBreedsData; // Initialize the filteredData property with the breeds data
      });
    } else if (this.selectedDataType === 'facts') {
      // Fetch cat facts data
      this.catdisplayService.getCatFacts().subscribe(data => {
        this.catFactsData = data.data; // Assign the fetched data to the catFactsData property
        this.filteredData = this.catFactsData; // Initialize the filteredData property with the facts data
      });
    }
  }

  filterItems() {
    // Implement the filtering logic here based on the searchTerm
    if (this.searchTerm.trim() === '') {
      // If the search term is empty, show all the data
      this.filteredData = this.selectedDataType === 'breeds' ? this.catBreedsData : this.catFactsData;
    } else {
      // Filter the data based on the search term and selected data type
      if (this.selectedDataType === 'breeds'){
        this.filteredData = this.catBreedsData.filter(
          (item) =>
            item.breed.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
            item.country.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
            item.origin.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
            item.coat.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
            item.pattern.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      } else if (this.selectedDataType === 'facts') {
        this.filteredData = this.catFactsData.filter(
          (item) =>
            item.fact.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
            item.length.toString().includes(this.searchTerm)
        );
  
      }

    }
  }
  // Function to handle data type change
  onDataTypeChange() {
    // When the user changes the data type, fetch the corresponding data
    this.fetchData();
  }

  
}
