class StaticController < ApplicationController
    def index
      @contact = Contact.new
    end
end
